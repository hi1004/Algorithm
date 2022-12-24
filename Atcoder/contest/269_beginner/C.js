const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
let n = BigInt(input[0]);

let ans = [];

let s = n;
while (true) {
  ans.push(s);
  if (s == 0) break;
  s = (s - 1n) & n;
}
ans.reverse();
for (let i = 0; i < ans.length; i++) {
  console.log(ans[i].toString());
}
