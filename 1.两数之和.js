/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    const item_i = nums[i];
    for (let j = 1; j < nums.length; j += 1) {
      const item_j = nums[j];
      const isTarget = item_i + item_j === target;
      if (isTarget) {
        console.log(i, j);
        return [i, j];
      }
    }
  }
};
// @lc code=end

twoSum([3,2,4], 6)