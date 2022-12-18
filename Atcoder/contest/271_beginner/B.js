const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [N, Q] = input.shift().split(' ').map(Number);
const quarys = input.slice(0, N).map(nums => nums.split(' ').map(Number));
const arrs = input.slice(N).map(nums => nums.split(' ').map(Number));

for (let i = 0; i < Q; i++) {
  const [index, point] = arrs[i];

  console.log(quarys[index - 1][point]);
}
