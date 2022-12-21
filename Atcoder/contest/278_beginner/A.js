const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const nums = input[0].split(' ').map(Number);
for (let i = 0; i < K; i++) {
  nums.shift();
  nums.push(0);
}
console.log(nums.join(' '));
