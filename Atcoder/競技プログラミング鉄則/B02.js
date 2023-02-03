const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [input, nums] = fs.readFileSync(file).toString().trim().split('\n');
const [A, B] = input.split(' ').map(Number);

let ans = 'No';
for (let i = A; i <= B; i++) {
  if (100 % i === 0) {
    ans = 'Yes';
    break;
  }
}
console.log(ans);
