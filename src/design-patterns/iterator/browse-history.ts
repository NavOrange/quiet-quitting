import { Iterator } from './iterator'

export default class BrowseHistory {
  private urls: string[] = []

  public push(url: string) {
    this.urls.push(url)
  }

  public pop() {
    return this.urls.pop()
  }

  public createIterator() {
    return new this.ListIterator(this)
  }

  public ListIterator = class implements Iterator<string> {
    private history: BrowseHistory
    private index: number = 0

    constructor(history: BrowseHistory) {
      this.history = history
    }

    public hasNext() {
      return this.index < this.history.urls.length
    }

    public current() {
      return this.history.urls[this.index]
    }

    public next() {
      this.index++
    }
  }
}
