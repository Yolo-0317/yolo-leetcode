/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 2 === 1) {
    return false;
  }

  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  const stk = [];
  for (const char of s) {
    if (map.has(char)) {
      // 遇到右括号，如果此时stk为空，那说明之前没有左括号，所以为false
      // 如果stk不为空，但是stk第一个元素不是与之对应的左括号，也为false
      if (!stk.length || [...stk].pop() !== map.get(char)) {
        return false;
      }
      // 匹配成功，将栈顶元素推出
      stk.pop();
    } else {
      // 遇到左括号，放入stk
      stk.push(char);
    }
  }
  return stk.length === 0;
};
// @lc code=end
