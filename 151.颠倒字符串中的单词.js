/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const len = s.length;
  let left = 0,
    right = len;

  while (left <= right && s.charAt(left) === " ") {
    ++left;
  }

  while (left <= right && s.charAt(right) === " ") {
    --right;
  }
  console.log(left, right);

  let word = "";
  const strArr = [];

  while (left <= right) {
    const char = s.charAt(left);
    console.log(word);
    if (word.length !== 0 && (char === " " || char === "")) {
      strArr.unshift(word);
      word = "";
    } else {
      word += char;
    }
    left += 1;
  }
  return strArr.join(" ");
};
// @lc code=end

console.log(reverseWords("  hello world"));
