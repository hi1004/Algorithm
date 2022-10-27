const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(inputs.shift());
const nums = inputs[0].split(' ').map(v => parseInt(v));
const arr = [0, 0, 0, 0, 0];
for (let i = 0; i < N; i++) {
  arr[nums[i] / 100]++;
}

const result = arr[1] * arr[4] + arr[2] * arr[3];
console.log(result);
