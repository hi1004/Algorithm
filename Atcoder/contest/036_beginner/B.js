const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const n = Number(input.shift());
const arrs = input.slice().map(n => n.trim().split(''));

for (let i = 0; i < n; i++) {
  let str = '';
  for (let j = n - 1; j >= 0; j--) {
    str += arrs[j][i];
  }
  console.log(str);
}
