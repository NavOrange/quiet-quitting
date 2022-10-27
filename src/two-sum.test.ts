import { twoSum } from './two-sum.js'

describe('two sum', () => {
  test('nums = [2,7,11,15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })
})
