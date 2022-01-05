/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {};
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (obj[`${element}`]) {
      obj[`${element}`] = obj[`${element}`] + 1;
    } else {
      obj[`${element}`] = 1;
    }
  }
  const allIndexes = Object.values(obj);
  for (let index = 0; index < allIndexes.length; index++) {
    const element = allIndexes[index];
    if (element === 1) {
      console.log(index);
      return index;
    }
  }
};
// @lc code=end

firstUniqChar("leetcode");
firstUniqChar("loveleetcode");
