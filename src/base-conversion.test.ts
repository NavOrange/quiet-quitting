import { baseConversion } from './base-conversion.js'

describe('base conversion', () => {
  test('2 to 8', () => {
    expect(baseConversion('0b100').to(8)).toBe('04')
    expect(baseConversion('0b1000').to(8)).toBe('010')
    expect(baseConversion('0b11001111').to(8)).toBe('0317')
    expect(baseConversion('0b1000000000001100').to(8)).toBe('0100014')
  })

  test('2 to 10', () => {
    expect(baseConversion('0b100').to(10)).toBe('4')
    expect(baseConversion('0b1000').to(10)).toBe('8')
    expect(baseConversion('0b11001111').to(10)).toBe('207')
    expect(baseConversion('0b1000000000001100').to(10)).toBe('32780')
  })

  test('2 to 16', () => {
    expect(baseConversion('0b100').to(16)).toBe('0x4')
    expect(baseConversion('0b1000').to(16)).toBe('0x8')
    expect(baseConversion('0b11001111').to(16)).toBe('0xcf')
    expect(baseConversion('0b1000000000001100').to(16)).toBe('0x800c')
  })

  test('8 to 2', () => {
    expect(baseConversion('04').to(2)).toBe('0b100')
    expect(baseConversion('027').to(2)).toBe('0b10111')
    expect(baseConversion('010').to(2)).toBe('0b1000')
    expect(baseConversion('0317').to(2)).toBe('0b11001111')
    expect(baseConversion('0100014').to(2)).toBe('0b1000000000001100')
  })

  test('8 to 10', () => {
    expect(baseConversion('04').to(10)).toBe('4')
    expect(baseConversion('027').to(10)).toBe('23')
    expect(baseConversion('010').to(10)).toBe('8')
    expect(baseConversion('0317').to(10)).toBe('207')
    expect(baseConversion('0100014').to(10)).toBe('32780')
  })

  test('8 to 16', () => {
    expect(baseConversion('04').to(16)).toBe('0x4')
    expect(baseConversion('027').to(16)).toBe('0x17')
    expect(baseConversion('010').to(16)).toBe('0x8')
    expect(baseConversion('0317').to(16)).toBe('0xcf')
    expect(baseConversion('0100014').to(16)).toBe('0x800c')
  })

  test('10 to 2', () => {
    expect(baseConversion('4').to(2)).toBe('0b100')
    expect(baseConversion('23').to(2)).toBe('0b10111')
    expect(baseConversion('8').to(2)).toBe('0b1000')
    expect(baseConversion('207').to(2)).toBe('0b11001111')
    expect(baseConversion('32780').to(2)).toBe('0b1000000000001100')
  })

  test('10 to 8', () => {
    expect(baseConversion('4').to(8)).toBe('04')
    expect(baseConversion('23').to(8)).toBe('027')
    expect(baseConversion('8').to(8)).toBe('010')
    expect(baseConversion('207').to(8)).toBe('0317')
    expect(baseConversion('32780').to(8)).toBe('0100014')
  })

  test('10 to 16', () => {
    expect(baseConversion('4').to(16)).toBe('0x4')
    expect(baseConversion('23').to(16)).toBe('0x17')
    expect(baseConversion('8').to(16)).toBe('0x8')
    expect(baseConversion('207').to(16)).toBe('0xcf')
    expect(baseConversion('32780').to(16)).toBe('0x800c')
  })

  test('16 to 2', () => {
    expect(baseConversion('0x4').to(2)).toBe('0b100')
    expect(baseConversion('0x17').to(2)).toBe('0b10111')
    expect(baseConversion('0x8').to(2)).toBe('0b1000')
    expect(baseConversion('0xcf').to(2)).toBe('0b11001111')
    expect(baseConversion('0x800c').to(2)).toBe('0b1000000000001100')
  })

  test('16 to 8', () => {
    expect(baseConversion('0x4').to(8)).toBe('04')
    expect(baseConversion('0x17').to(8)).toBe('027')
    expect(baseConversion('0x8').to(8)).toBe('010')
    expect(baseConversion('0xcf').to(8)).toBe('0317')
    expect(baseConversion('0x800c').to(8)).toBe('0100014')
  })

  test('16 to 10', () => {
    expect(baseConversion('0x4').to(10)).toBe('4')
    expect(baseConversion('0x17').to(10)).toBe('23')
    expect(baseConversion('0x8').to(10)).toBe('8')
    expect(baseConversion('0xcf').to(10)).toBe('207')
    expect(baseConversion('0x800c').to(10)).toBe('32780')
  })
})
