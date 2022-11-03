const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
nums.sort((a, b) => a - b);

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (num === arr[mid]) return 'Yes';
    if (num > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 'No';
}

console.log(binarySearch(nums, M));
