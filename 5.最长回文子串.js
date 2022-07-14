/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * 动态规划
 * 
 * 对于长度为 11的子串，它显然是个回文串
 * 对于长度为 22 的子串，只要它的两个字母相同，它就是一个回文串
 * 在状态转移方程中，我们是从长度较短的字符串向长度较长的字符串进行转移的，因此一定要注意动态规划的循环顺序
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) {
    return s;
  }

  let maxLen = 1,
    begin = 0;

  const dp = [];
  // 初始化：所有长度为 1 的子串都是回文串
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    dp[i][i] = true;
  }
  const charArray = s.split("");
  console.log(charArray);
  // 先枚举子串长度
  for (let L = 2; L <= len; L++) {
    // 枚举左边界，左边界的上限设置可以宽松一些
    for (let i = 0; i < len; i++) {
      // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
      let j = L + i - 1;
      // 如果右边界越界，就可以退出当前循环
      if (j >= len) {
        break;
      }

      if (charArray[i] !== charArray[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          // i===j的情况下，长度在3以内的是回文
          dp[i][j] = true;
        } else {
          // i===j，且子串长度大于3，此时只要i和j之间的子串是回文，那i和j一定是回文
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
      if (dp[i][j] && L > maxLen) {
        maxLen = L;
        begin = i;
      }
    }
  }

  return s.substring(begin, begin + maxLen);
};
// @lc code=end

console.log(longestPalindrome("cbacdcadbd"));
