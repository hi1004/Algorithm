const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [t]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let ans = {
  x: 0,
  y: 0,
};
let isR = 0;
let muki = 'x';

[...t].forEach((v, i) => {
  if (v === 'R') {
    isR++;

    muki = isR % 2 ? 'y' : 'x';
    return;
  }
  ans[muki] = ans[muki] + [1, -1, -1, 1][isR % 4];
});
console.log(ans.x, ans.y);
