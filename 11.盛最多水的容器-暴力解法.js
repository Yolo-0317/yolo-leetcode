/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 * 
 * 暴力解法，存在case没通过情况
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length;
  let max = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len; j++) {
      max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return max;
};
// @lc code=end

console.log(maxArea([1, 8, 6]));
