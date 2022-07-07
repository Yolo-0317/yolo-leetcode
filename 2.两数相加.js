/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null,
    tail = null;
  let carry = 0;

  while (l1 || l2) {
    const n1 = l1 ? l1.val : null;
    const n2 = l2 ? l2.val : null;
    const sum = n1 + n2 + carry;

    if (head === null) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head;
};
// @lc code=end

/**
 * 将数组转为ListNode结构
 * @param {*} arr
 * @returns  ListNode
 */
function getListNode(arr) {
  let listNode = null,
    tail = null;
  arr.forEach((num, i) => {
    if (i === 0) {
      listNode = tail = new ListNode(num);
    } else {
      tail.next = new ListNode(num);
      tail = tail.next;
    }
  });
  return listNode;
}

/**
 * 将最终的ListNode结构转为数组
 * @param {ListNode} listNode
 */
function getArrayFromListNode(listNode) {
  const arr = [];
  while (listNode) {
    arr.push(listNode.val);
    listNode = listNode.next;
  }
  return arr;
}

let l1 = getListNode([2, 4, 3]);
let l2 = getListNode([5, 6, 4]);

const listNodeRes = addTwoNumbers(l1, l2);
const arrRes = getArrayFromListNode(listNodeRes);
console.log(arrRes);
