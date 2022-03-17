/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i += 1;
    }
  }
  console.log(i + 1);
};
// @lc code=end

removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
