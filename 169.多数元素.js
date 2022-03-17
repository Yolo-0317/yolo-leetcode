/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (!Array.isArray(nums)) {
    return false;
  }
  const obj = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const eleValue = obj[`${element}`];
    if (eleValue) {
      obj[`${element}`] += 1;
    } else {
      obj[`${element}`] = 1;
    }
    if (obj[`${element}`] > obj[`${element}`] / 2 ) {
      console.log(element)
      return element;
    }
  }
};
// @lc code=end

majorityElement([3,2,3])
majorityElement([2,2,1,1,1,2,2])