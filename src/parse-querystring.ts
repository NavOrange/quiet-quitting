type URLObj = { path: string; query: Record<string, string> }

export const url2Obj: (url: string) => URLObj = url => {
  const queryStringSeparator = '?'
  const paramsSeparator = '&'
  const keyValueSeparator = '='

  const pathEndIndex = url.indexOf(queryStringSeparator)
  const path = url.substring(0, pathEndIndex)
  const query = {}

  for (
    let i = pathEndIndex + 1, len = url.length, prevIndex = i, prevStr = '';
    i < len;
    i++
  ) {
    if ([paramsSeparator, keyValueSeparator].includes(url.charAt(i))) {
      const str = url.substring(prevIndex, i)
      prevIndex = i + 1

      if (!prevStr) {
        prevStr = str
        continue
      }

      query[prevStr] = str
      prevStr = ''
    }

    // 处理最后一个值
    if (i === len - 1) {
      query[prevStr] = url.substring(prevIndex)
      prevStr = ''
    }
  }

  return { path, query }
}

export const obj2Url = (obj: URLObj) => {
  return [
    obj.path,
    Object.entries(obj.query)
      .map(item => item.join('='))
      .join('&')
  ].join('?')
}
