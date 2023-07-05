const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const filterArr = a.map(arr => new Set(arr).size === 1);
let cut = 0;
filterArr.forEach(v => {
  if (cut === 3) return;
  if (v) {
    cut++;
  } else {
    cut = 0;
  }
});
console.log(cut >= 3 ? 'Yes' : 'No');
