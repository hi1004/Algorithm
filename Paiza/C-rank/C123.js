const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const N = input.shift();
const nums = input.slice(0, N).map(Number);
const M = input.slice(N).shift();
const arrs = input
  .slice(input.indexOf(M) + 1)
  .map(n => n.split(' ').map(Number));

const mame = Array.from({ length: N }).fill(0);

for (let i = 0; i < N; i++) {
  arrs.forEach(arr => {
    if (arr[0] <= i + 1 && i + 1 <= arr[1]) {
      mame[i] += arr[2];
      if (mame[i] > nums[i]) {
        mame[i] = nums[i];
      }
    }
  });
}
console.log(mame.join('\n'));
