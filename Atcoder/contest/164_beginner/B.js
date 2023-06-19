const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, c, d]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let i = 0;

while (true) {
  if (i % 2 === 0) {
    c -= b;
  } else {
    a -= d;
  }

  if (a <= 0) {
    console.log('No');
    break;
  } else if (c <= 0) {
    console.log('Yes');
    break;
  }

  i++;
}
