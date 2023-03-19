const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arrs = input.slice().map(n => n.split(' ').map(BigInt));
const c = arrs.flat().sort((a, b) => a.toString() - b.toString());
const binarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = parseInt((start + end) / 2);

    if (target === arr[mid]) {
      return mid + 1;
    } else {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
};

arrs.forEach(arr => {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    answer.push(binarySearch(c, arr[i]));
  }
  console.log(answer.join(' '));
});
