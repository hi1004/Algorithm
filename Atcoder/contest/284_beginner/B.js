const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const n = input.shift();

for (let i = 1; i < n * 2; i += 2) {
  const nums = input[i].split(' ').map(Number);
  const answer = nums.filter(n => n % 2 !== 0).length;
  console.log(answer);
}
