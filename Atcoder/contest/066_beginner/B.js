const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [S] = fs.readFileSync(file).toString().trim().split(/\s+/);
let ans = 0;

for (let i = S.length - 1; i >= 0; i--) {
  let sub = S.substring(0, i);
  if (sub.length % 2 !== 0) continue;
  let half = sub.length / 2;
  let left = sub.substring(0, half);
  let right = sub.substring(half);
  if (left === right) {
    ans = sub.length;
    break;
  }
}

console.log(ans);
