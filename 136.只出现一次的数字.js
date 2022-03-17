/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/solution/zhi-chu-xian-yi-ci-de-shu-zi-by-leetcode-solution/
 *
 * 使用位运算 线性时间复杂度和常数空间复杂度
 * 异或运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let single = 0;
  nums.forEach((num) => {
    single ^= num;
  });
  console.log(single);
};
// @lc code=end

singleNumber([4, 1, 2, 1, 2]);
