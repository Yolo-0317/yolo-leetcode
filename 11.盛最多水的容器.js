/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 * 双指针
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 定义左右指针
  let l = 0,
    r = height.length - 1;

  let max = 0;

  while (l < r) {
    area = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(area, max);

    if (height[l] <= height[r]) {
      // 从值比较小的指针开始移动
      ++l;
    } else {
      --r;
    }
  }
  return max;
};
// @lc code=end
