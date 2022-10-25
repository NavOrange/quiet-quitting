/**
 * 给定一个包含了一些0和1的非空二维数组grid.
 * 一个岛屿是由一些相邻的1(代表土地)构成的组合，这里的「相邻」要求两个1必须在水平或者竖直方向上相邻。
 * 你可以假设grid的四个边缘都被 o(代表水)包围着。
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0。)
 *
 * 示例:
 * ```javascript
 * const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]
 * ```
 */

export const getArea = (grid: number[][]) => {
  let max = 0

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // 不是 1 跳过
      if (grid[row][col] !== 1) continue

      max = Math.max(max, dfs(row, col))
    }
  }

  function dfs(row, col) {
    if (row < 0) return 0
    if (row >= grid.length) return 0
    if (col < 0) return 0
    if (col >= grid[0].length) return 0
    if (grid[row][col] === 0) return 0

    let count = 1

    // 沉没
    grid[row][col] = 0

    count += dfs(row - 1, col)
    count += dfs(row + 1, col)
    count += dfs(row, col - 1)
    count += dfs(row, col + 1)

    return count
  }

  return max
}
