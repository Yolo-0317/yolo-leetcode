/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0;
  maxAns = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    pre = Math.max(pre + num, num);
    maxAns = Math.max(pre, maxAns);
  }

  return maxAns;
};
// @lc code=end

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
