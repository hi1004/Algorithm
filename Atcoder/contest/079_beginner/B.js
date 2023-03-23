const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

const arr = [2, 1];
for (let i = 2; i <= x; i++) {
  arr.push(BigInt(arr[i - 1]) + BigInt(arr[i - 2]));
}
console.log(String(arr[x]));
