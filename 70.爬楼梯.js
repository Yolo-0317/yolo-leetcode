/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 0; i < n; i += 1) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
// @lc code=end

console.log(climbStairs(4));
// console.log(1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34);
