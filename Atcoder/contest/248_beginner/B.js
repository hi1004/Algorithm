const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, k]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

let cut = 0;
while (a < b) {
  a = a * k;
  cut++;
}
console.log(cut);
