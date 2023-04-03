const fs = require('fs');
const { deflate } = require('zlib');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(v => (isNaN(v) ? v : +v));
const n = input.shift();
const reds = input.slice(0, n).map(s => s.trim());
const m = input[n];
const blues = input.slice(n + 1, n + 1 + m).map(s => s.trim());
const o = {};
reds.forEach(si => {
  if (!o[si]) o[si] = 0;
  o[si]++;
});

blues.forEach(ti => {
  if (!o[ti]) o[ti] = 0;
  o[ti]--;
});
let max = 0;
Object.keys(o).forEach(k => {
  max = Math.max(max, o[k]);
});
console.log(max);
