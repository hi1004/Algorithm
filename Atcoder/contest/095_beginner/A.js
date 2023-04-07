const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [s] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(v => (isNaN(v) ? v : +v));

let cut = 0;
s.split('').forEach(v => {
  if (v === 'o') cut++;
});
console.log(700 + 100 * cut);
