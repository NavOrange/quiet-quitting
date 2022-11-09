/**
 * 用function判断下列字符串中出现次数最多的字母，并输出字母出现的次数
 */
export const getMaxCountWord = (str: string) => {
  const map = {}

  let max = 0
  let word

  for (let i = 0; i < str.length; i++) {
    const _word = str.charAt(i)
    if (map[_word]) {
      map[_word]++
    } else {
      map[_word] = 1
    }

    if (map[_word] > max) {
      max = map[_word]
      word = _word
    }
  }

  return { max, word }
}
