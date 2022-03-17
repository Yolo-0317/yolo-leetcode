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

/**
 * 使用哈希表来实现
 * 我们遍历到数字 a 时，用 target 减去 a，就会得到 b，
 * 若 b存在于哈希表中，我们就可以直接返回结果了。
 * 若 b 不存在，那么我们需要将 a 存入哈希表，好让后续遍历的数字使用
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
function twoSum1(nums, target) {
  const map = new Map();

  for(let i = 0; i < nums.length; i +=1) {
    const otherNum = target - nums[i]
    if (map.has(otherNum)) {
      console.log([map.get(otherNum), i]);
      return [map.get(otherNum), i];
    } else {
      map.set(nums[i], i);
    }
  }
}
// @lc code=end

twoSum1([3,2,4], 6)