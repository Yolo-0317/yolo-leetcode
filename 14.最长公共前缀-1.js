/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * 用第一个元素作为str的初始值
 * 去跟下一个元素进行比较，将每次比较的结果作为str的值，继续循环比较
 * 最后返回str
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

  let str = strs1st; // 初始值是第一个元素
  // 从第二个元素开始比较
  for (let j = 1; j < strs.length; j++) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== strs[j][i]) {
        str = str.substring(0, i);
        break;
      }
    }
  }

  console.log("res: ", str || '');
  return str || '';
};
// @lc code=end

longestCommonPrefix(["reflower", "abc", "a", "b", "z"]);
longestCommonPrefix(["fllower", "fllow", "flloight", "flloioght"]);
longestCommonPrefix(["fllower"]);
