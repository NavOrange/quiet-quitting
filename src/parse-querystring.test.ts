import { url2Obj, obj2Url } from './parse-querystring'

const url = 'https://www.douyin.com/abc?foo=1&bar=2'
const urlObj = url2Obj(url)

describe('parse querystring', () => {
  test('url to obj', () => {
    expect(urlObj).toEqual({
      path: 'https://www.douyin.com/abc',
      query: { foo: '1', bar: '2' }
    })
  })

  test('obj to url', () => {
    urlObj.query.coo = '3'
    const newUrl = obj2Url(urlObj)
    expect(newUrl).toEqual('https://www.douyin.com/abc?foo=1&bar=2&coo=3')
  })
})
