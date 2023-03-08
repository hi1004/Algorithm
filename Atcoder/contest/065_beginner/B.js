const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...a] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let flag = false;
let cnt = 1;
let on = 1;
for (let i = 1; i <= n; i++) {
  on = a[on - 1];
  if (on == 2) {
    flag = true;
    break;
  }
  cnt++;
}

console.log(flag ? cnt : -1);
