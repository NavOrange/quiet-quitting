type Prefix = '' | '0' | '0b' | '0B' | '0x' | '0X'

/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Numbers_and_dates
 */
export const baseConversion = (number: string) => {
  const getNumberBase = (str: string) => {
    // 十进制可以以 0 开头，后面接其他十进制数字，但是假如下一个接的十进制数字小于 8，那么该数字将会被当做八进制处理。
    if (/^0[0-7]+$/.test(str)) return 8

    // 二进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母 B(0b 或者是 0B)
    if (/^0b[01]+$/i.test(str)) return 2

    // 十六进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母 X(0x 或者是 0X)
    if (/^0x[0-9A-F]+/i.test(str)) return 16

    if (/^\d+$/.test(str)) return 10
  }

  const sourceBase = getNumberBase(number)

  const base16 = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
  }

  const toBinary = (base: number, prefix: Prefix) => {
    let _base = Number.parseInt(number, base)
    let octal = ''

    while (_base !== 0) {
      octal = (_base % 2) + octal
      _base = Math.trunc(_base / 2)
    }

    return prefix + octal
  }

  const toDecimal = (base: number, prefix: Prefix) => {
    const numbers = number.replace(/^0[b|x]?/i, '').split('')

    return (
      prefix +
      numbers.reduce(
        (total, n, index) =>
          total +
          Number.parseInt(n, base) * Math.pow(base, numbers.length - 1 - index),
        0
      )
    )
  }

  const genOctalOrHexadecimalConverter =
    (base: number) => (sourceBase: number, prefix: Prefix) => {
      const binary = (sourceBase === 2 ? number : toBinary(sourceBase, prefix))
        .replace(/^0[b|x]?/i, '')
        .split('')

      // 2 进制转 8 进制，二进制每三位对应一个 8 进制数字 然后把结果拼接起来
      const bit = Math.log(base) / Math.log(2)

      if (!Number.isInteger(bit)) throw Error('Not support base' + base)

      // 前面补 0
      if (binary.length % bit !== 0)
        binary.unshift(
          ...Array.from<string>({ length: bit - (binary.length % bit) }).fill(
            '0'
          )
        )

      return binary.reduce((total, item, index, array) => {
        // n 位数字一组进行 [i+2] * 2^2 + [i+1] * 2^1 + [i] * 2^0
        if (index === 0 || index % bit !== bit - 1) return total

        const number = Array.from({ length: bit })
          .map((_, i) => array[index - bit + i + 1])
          .reduce(
            (octal, n, index) =>
              octal + Number.parseInt(n) * Math.pow(2, bit - 1 - index),
            0
          )
        return total + (number > 9 ? base16[number] : number)
      }, prefix)
    }

  const toOctal = genOctalOrHexadecimalConverter(8)

  const toHexadecimal = genOctalOrHexadecimalConverter(16)

  const to = (base: 2 | 8 | 10 | 16) => {
    if (sourceBase === base) return number

    const prefix =
      base === 2 ? '0b' : base === 8 ? '0' : base === 16 ? '0x' : ''

    if (base === 2) return toBinary(sourceBase, prefix)
    if (base === 8) return toOctal(sourceBase, prefix)
    if (base === 10) return toDecimal(sourceBase, prefix)
    if (base === 16) return toHexadecimal(sourceBase, prefix)
  }

  return { to }
}
