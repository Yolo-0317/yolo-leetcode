/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 涉及动态规划
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

  let maxLen = 1;
  let begin = 0;

  // dp[i][j] 表示 s[i..j] 是否是回文串
  const dp = [];

  for (let i = 0; i < len; i += 1) {
    dp[i] = [];
  }

  // 初始化：所有长度为 1 的子串都是回文串
  for (let i = 0; i < len; i += 1) {
    dp[i][i] = true;
  }

  const charArray = Array.from(s);
  // 递推开始
  // 先枚举子串长度
  for (let L = 2; L <= len; L += 1) {
    // 枚举左边界，左边界的上限设置可以宽松一些
    for (let i = 0; i < len; i += 1) {
      // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
      let j = L + i - 1;
      // 如果右边界越界，就可以退出当前循环
      if (j >= len) {
        break;
      }

      if (charArray[i] != charArray[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          // 相等 并且是三个及以内长度
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1]; // 大于三个的情况，看较短的子串情况
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

console.log(longestPalindrome('abadaabba'))