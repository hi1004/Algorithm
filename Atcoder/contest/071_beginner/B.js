const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [s] = fs.readFileSync(file).toString().trim().split(/\s+/);

const a = 'abcdefghijklmnopqrstuvwxyz';

let ans = 'None';
for (let i = 0; i < 26; i++) {
  if (s.indexOf(a[i]) === -1) {
    ans = a[i];
    break;
  }
}
console.log(ans);
