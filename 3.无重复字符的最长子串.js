/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let n = s.length,
    ans = 0;
  const map = new Map();

  for (let start = 0, end = 0; end < n; end += 1) {
    const alpha = s.charAt(end);
    if (map.has(alpha)) {
      // 已经存在当前字符
      // console.log(alpha, start, map)
      start = Math.max(map.get(alpha), start); // 跟start指向的字符重复，滑动start
      // console.log(start, end);
    }
    //  每次移动end，都会计算ans
    ans = Math.max(ans, end - start + 1);
    // console.log("ans", ans);
    map.set(alpha, end + 1); // 每次都要记录当前字符位置
  }
  console.log(ans, map);
  return ans;
};
// @lc code=end

lengthOfLongestSubstring("abccbcbb");
