/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量  深度优先搜索
 */

// @lc code=start
/**
 *  当找到1时开始计数，然后将1周围的全部进行DFS设置为0；然后再寻找下一个1，继续DFS
 * @param {character[][]} grid
 * @return {number}
 */

const dfs = (grid, r, c) => {
  const nr = grid.length;
  const nc = grid[0].length;

  if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] === "0") {
    return;
  }

  grid[r][c] = "0";
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
};

var numIslands = function (grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }

  const nr = grid.length;
  const nc = grid[0].length;
  let num_island = 0;

  for (let r = 0; r < nr; r += 1) {
    for (let c = 0; c < nc; c += 1) {
      // console.log(`grid ${r}-${c}`, grid[r][c]);
      if (grid[r][c] === "1") {
        num_island += 1;
        dfs(grid, r, c);
      }
    }
  }
  console.log(num_island);
  return num_island;
};
// @lc code=end

numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);
