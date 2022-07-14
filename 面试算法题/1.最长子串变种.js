// # 第一题

// 【求满足条件的最长子串的长度】
// 给定一个字符串，只包含字母和数字，按要求找出字符串中最长（连续）子串的长度，字符字串本身是其最长子串，子串满足：
// 1. 只包含 n 个字母（a~z,A~Z），其余必须是数字；
// 2. 字母可以在子串的任意位置

// 如果找不到满足要求的子串，则返回 -1.

// 示例1
// 子串：abc124acb
// n=1
// 输出：4

// 示例2
// 子串：abc124a2cb
// n=1
// 输出：5

// 示例3
// 子串：abc124a2cb
// n=2
// 输出：6

function getSubNum(str, n) {
  // 至少有n个字母
  if (!(/[a-zA-z]+/.test(str) && /[1-9]/.test(str))) {
    return -1;
  }

  const len = str.length;
  let arr = [];
  let wordNum = 0; // 记录已存字母个数
  let max = 0;
  for (let i = 0; i < len; i++) {
    const char = str[i];
    // 如果当前是数字，放入arr 如果当前是字母，判断arr中有几个字母
    if (/[1-9]/.test(char)) {
      arr.push(char);
      console.log(arr);
      max = Math.max(arr.length, max);
    }
    if (/[a-zA-z]+/.test(char)) {
      console.log(char);
      if (wordNum < n) {
        arr = [];
        wordNum += 1;
      }
      // 滚动数组
      arr.splice(0, arr.length);
      arr.push(char);
    }
  }
  return max;
}

console.log(getSubNum("1", 1));
