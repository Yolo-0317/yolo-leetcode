/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const sArr = s.split("");

  let num = 0;
  let i = 0;
  while (i < sArr.length) {
    const element = sArr[i];
    const nextElement = sArr[i + 1];
    const elNum = romanMap[`${element}`];
    const nextElNum = romanMap[`${nextElement}`];
    if (elNum === nextElNum) {
      num += romanMap[`${element}`];
      i += 1;
    }
    if (elNum > nextElNum) {
      num += elNum;
      i += 1;
    }
    if (elNum < nextElNum) {
      num += nextElNum -  elNum;
      i += 2;
    }
    if (nextElNum === undefined) {
      num += elNum;
      i += 1;
    }
  }

  console.log(num);
};
// @lc code=end

romanToInt("XLII");
