const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[h, w], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

for (let i = 0; i < w; i++) {
  const ans = [];
  for (let j = 0; j < h; j++) {
    ans.push(a[j][i]);
  }
  console.log(ans.join(' '));
}
