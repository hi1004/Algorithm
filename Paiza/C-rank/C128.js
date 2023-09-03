const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...arr] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
arr = arr.flat().reverse();
let top = arr[1] * arr[0] + 1;
let bottom = arr[0];
for (let i = 1; i < arr.length - 1; i++) {
  newTop = top * arr[i + 1] + bottom;
  bottom = top;
  top = newTop;
}
console.log(top, bottom);
