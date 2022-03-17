/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 * 
 * 最长公共子序列问题是典型的二维动态规划问题。
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m).fill(0)
};
// @lc code=end

