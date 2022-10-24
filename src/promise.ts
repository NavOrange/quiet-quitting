interface Exec<T = unknown> {
  (resolve: (value: T) => void, reject: (error: T) => void): void
}

interface ThenCallback<T, K = unknown> {
  (value: T): K
}

export class MyPromise<T> {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(exec: Exec<T>) {
    exec(this.resolve, this.reject)
  }

  result: T
  state = MyPromise.PENDING
  successCallback: Array<() => void> = []
  errorCallback: Array<() => void> = []

  resolve = (value: T) => {
    if (this.state !== MyPromise.PENDING) return
    this.result = value
    this.state = MyPromise.FULFILLED
    while (this.successCallback.length) this.successCallback.shift()()
  }

  reject = (err: T) => {
    if (this.state !== MyPromise.PENDING) return
    this.result = err
    this.state = MyPromise.REJECTED
    while (this.errorCallback.length) this.errorCallback.shift()()
  }

  then<K>(
    successCallback: ThenCallback<T, K>,
    errorCallback?: ThenCallback<T, K>
  ) {
    const promise = new MyPromise<K>((resolve, reject) => {
      if (this.state === MyPromise.FULFILLED) {
        setTimeout(() => {
          const x = successCallback(this.result)
          this.resolvePromise(x, resolve, reject)
        })
      } else if (this.state === MyPromise.REJECTED) {
        setTimeout(() => {
          const x = errorCallback(this.result)
          this.resolvePromise(x, resolve, reject)
        })
      } else {
        this.successCallback.push(() => {
          const x = successCallback(this.result)
          this.resolvePromise(x, resolve, reject)
        })
        this.errorCallback.push(() => {
          const x = errorCallback(this.result)
          this.resolvePromise(x, resolve, reject)
        })
      }
    })

    return promise
  }

  resolvePromise(x: unknown, resolve, reject) {
    if (x instanceof MyPromise) x.then(resolve, reject)
    else resolve(x)
  }
}
