/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (typeof s !== "string" || typeof t !== "string") {
    return false;
  }
  if (s.length !== t.length) {
    return false;
  }
  const sArray = [];
  const tArray = [];
  for (let index = 0; index < s.length; index++) {
    sArray.push(s[index]);
    tArray.push(t[index]);
  }
  const newS = sArray.sort().join("");
  const newT = tArray.sort().join("");
  console.log(newS , newT);
  console.log(newS === newT);
  return newS === newT;
};
// @lc code=end

isAnagram("anagram", "nagaram");
isAnagram("rac%", "c%ar");
