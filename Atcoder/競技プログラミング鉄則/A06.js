const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N, Q] = input.shift().split(' ').map(Number);
const nums = input.shift().split(' ').map(Number);
const list = input.slice().map(n => n.split(' ').map(Number));

const S = [0];
for (let i = 1; i <= N; i++) S[i] = S[i - 1] + nums[i - 1];
list.forEach(item => console.log(S[item[1]] - S[item[0] - 1]));
