import { MyPromise } from './promise'

describe('promise', () => {
  test('then return value', async () => {
    const result = [[], []]

    await new MyPromise<string>(resovle => {
      resovle('成功')
    })
      .then(data => {
        result[0].push(data)
        return 't1'
      })
      .then(data => {
        result[0].push(data)
        return new MyPromise<string>(resovle => resovle('sss'))
      })
      .then(data => {
        result[0].push(data)
      })

    await new Promise(resovle => {
      resovle('成功')
    })
      .then(data => {
        result[1].push(data)
        return 't1'
      })
      .then(data => {
        result[1].push(data)
        return new Promise(resovle => resovle('sss'))
      })
      .then(data => {
        result[1].push(data)
      })

    expect(result[0]).toEqual(result[1])
  })
})
