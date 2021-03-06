/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * 用第一个元素作为reduce的初始值
 * 每次reduce的结果，去跟下一个元素进行比较
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const strs1st = strs[0];
  // 只有一个元素时，返回这个元素
  if (strs.length === 1) {
    console.log("res: ", strs1st);
    return strs1st;
  }
  // 用第一个元素作为reduce的初始值
  const str = strs.reduce((previousValue, currentValue, index, arr) => {
    if (previousValue) {
      for (let i = 0; i < previousValue.length; i++) {
        // console.log(previousValue[i], currentValue[i]);
        if (previousValue[i] !== currentValue[i]) {
          // console.log(i, previousValue.substring(0, i));
          return previousValue.substring(0, i);
        }
        if (i === previousValue.length - 1) {
          return previousValue;
        }
      }
    }
  }, strs1st);
  console.log("res: ", str || '');
  return str || '';
};
// @lc code=end

longestCommonPrefix(["reflower", "abc", "a", "b", "z"]);
longestCommonPrefix(["fllower", "fellow", "flloight", "flloioght"]);
longestCommonPrefix(["fllower"]);
