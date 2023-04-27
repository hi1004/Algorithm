const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const nums = String(n).split('');
let start = 0;
let answer = [];
for (let i = 0; i < nums.length; i++) {
  answer.push(Math.abs(753 - Number(nums.slice(start, start + 3).join(''))));
  start++;
}
console.log(Math.min(...answer));
