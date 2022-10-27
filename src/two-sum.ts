/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */
export const twoSum = (nums: number[], target: number) => {
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) return [i, j]
  //   }
  // }

  const map: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], i)

    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i]
  }
}
