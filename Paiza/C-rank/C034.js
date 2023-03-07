const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, op, b, eq, c] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(i => (isNaN(i) ? i : Number(i)));

if (op === '+') {
  if (a === 'x' || b === 'x') {
    const findX = [a, b].find(i => i !== 'x');
    console.log(c - findX);
  } else {
    console.log(a + b);
  }
} else {
  const findX = [a, b].indexOf('x');

  if (a === [a, b][findX]) {
    console.log(b + c);
  } else if (b === [a, b][findX]) {
    console.log(a - c);
  } else {
    console.log(a - b);
  }
}
