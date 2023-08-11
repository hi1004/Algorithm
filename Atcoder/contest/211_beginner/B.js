const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const arr = ['H', '2B', '3B', 'HR'];
let ans = '';
a = [...new Set(a.flat())];
arr.forEach((v, i) => {
  if (a.length === 4 && arr.includes(a[i])) {
    ans = 'Yes';
  } else {
    ans = 'No';
  }
});
console.log(ans);
