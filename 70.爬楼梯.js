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
  if (n < 3) {
    return n;
  }
  let prePre = 1;
  let pre = 2;
  let cur;

  for (let i = 3; i <= n; i += 1) {
    cur = prePre + pre;
    prePre = pre;
    pre = cur;
  }

  console.log(cur);
  return cur;
};
// @lc code=end
