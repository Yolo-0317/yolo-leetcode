/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const xStr = x.toString();
  const xReverse = xStr.split('').reverse().join('');
  console.log(x === xReverse)
  return x === xReverse;
};
// @lc code=end

isPalindrome('121');
isPalindrome('-121');

