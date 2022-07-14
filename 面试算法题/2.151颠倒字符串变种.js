// 题目描述
// 输入一个英文句子，句子包含若干个单词，每个单词间有一个空格。现在你需要将句子中的每个单词逆置，然后输出单词逆置后的句子（不改变之前单词的顺序）。
// 解答要求时间限制：1000ms, 内存限制：100MB
// 输入
// 输入只有一行，包含一个长度都不超过100的字符串S，表示英文句子。
// 输出
// 输出只有一行，即按要求输出处理后的英文句子。
// 样例
// 输入样例 1 复制
// Who Love Solo
// 输出样例 1
// ohW evoL oloS
// 提示样例 1

// 输入样例 2 复制
// ohW evoL oloS
// 输出样例 2
// Who Love Solo

function reverseStr(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    arr.unshift(char);
  }
  return arr.join("");
}

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
    console.log(word, char==="");
    if (
      word.length !== 0 &&
      (char === " " || char==="")
    ) {
      strArr.push(reverseStr(word));
      word = "";
    } else {
      word += char;
    }
    left += 1;
  }
  return strArr.join(" ");
};

console.log(reverseWords("ohW evoL oloS"));
