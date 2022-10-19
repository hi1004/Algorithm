const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(line.shift());
const x = Number(line.pop());
const nums = line[0].split(' ').map(Number);
nums.sort((a, b) => a - b);

function solution(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let result = 0;
  while (start < end) {
    if (arr[start] + arr[end] === x) {
      start++;
      result++;
    } else if (arr[start] + arr[end] > x) {
      end--;
    } else {
      start++;
    }
  }
  return result;
}

console.log(solution(nums, x));
