/**
 * 请用方法输出长度为500的数组内容为：
 * [
 *  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
 *  "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ",
 *  "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ",
 *  "CA", "CB"........]
 */
export const genArray = (length: number) => {
  // [A-Z] => charCode [65-90]

  const startCode = 65 // 'A'
  const endCode = 90
  const base = endCode - startCode + 1

  return Array.from({ length }).map((_, index) => {
    const item = [index % base]

    let number = Math.floor(index / base)
    while (number) {
      item.unshift((number % base) - 1)
      number = Math.floor(number / base)
    }

    return item.map(n => String.fromCharCode(n + startCode)).join('')
  })
}
