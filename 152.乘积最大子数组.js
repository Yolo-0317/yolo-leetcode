/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxF = nums[0],
    minF = nums[0],
    ans = nums[0];

  let len = nums.length;

  for (let i = 1; i < len; i++) {
    let max = maxF,
      min = minF;
    const el = nums[i];
    maxF = Math.max.call(null, max * el, min * el, el);
    minF = Math.min.call(null, max * el, min * el, el);
    ans = Math.max(maxF, ans);
  }
  return ans;
};
// @lc code=end

console.log(maxProduct([2, -2, 3, -2, 4]));
