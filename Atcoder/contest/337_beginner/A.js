const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let totalX = 0;
let totalY = 0;
a.map(arr => {
  const [x, y] = arr;
  totalX += x;
  totalY += y;
});
console.log(
  totalX > totalY ? 'Takahashi' : totalX === totalY ? 'Draw ' : 'Aoki'
);
