import { getArea } from './max-area-of-island'

describe('get area', () => {
  test('空数组', () => {
    expect(getArea([[]])).toBe(0)
  })

  test(`[
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ]`, () => {
    expect(
      getArea([
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]
      ])
    ).toBe(1)
  })

  test(`[
    [1, 1, 1],
    [0, 1, 0],
    [1, 0, 1],
  ]`, () => {
    expect(
      getArea([
        [1, 1, 1],
        [0, 1, 0],
        [1, 0, 1]
      ])
    ).toBe(4)
  })

  test(`[
    [0, 1, 1],
    [0, 1, 0],
    [1, 0, 1],
  ]`, () => {
    expect(
      getArea([
        [0, 1, 1],
        [0, 1, 0],
        [1, 0, 1]
      ])
    ).toBe(3)
  })

  test(`[
    [0, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]`, () => {
    expect(
      getArea([
        [0, 1, 1],
        [0, 1, 1],
        [1, 0, 1]
      ])
    ).toBe(5)
  })

  test(`[
    [0, 1, 1],
    [0, 1, 1],
    [1, 1, 1],
  ]`, () => {
    expect(
      getArea([
        [0, 1, 1],
        [0, 1, 1],
        [1, 1, 1]
      ])
    ).toBe(7)
  })

  test(`[
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ]`, () => {
    expect(
      getArea([
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
      ])
    ).toBe(7)
  })

  test(`[
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]`, () => {
    expect(
      getArea([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ])
    ).toBe(8)
  })

  test(`[
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]`, () => {
    expect(
      getArea([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ])
    ).toBe(9)
  })

  test(`[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]`, () => {
    expect(
      getArea([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ])
    ).toBe(0)
  })

  test(`[
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]`, () => {
    expect(
      getArea([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ])
    ).toBe(1)
  })

  test(`[
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ]`, () => {
    expect(
      getArea([
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
      ])
    ).toBe(6)
  })

  test(`[
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ]`, () => {
    expect(
      getArea([
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
      ])
    ).toBe(12)
  })

  test(`[
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ]`, () => {
    expect(
      getArea([
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
      ])
    ).toBe(12)
  })
})
