const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, ...n] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(s => (isNaN(s) ? s : +s));

if (x === 0) {
  console.log('divide by zero');
} else {
  const avg = n.reduce((a, b) => a + b, 0) / x;

  const collection = {};
  for (const value of n) {
    collection[value] = (collection[value] || 0) + 1;
  }
  let sum = 0;
  for (const key in collection) {
    sum += key * (collection[key] / x);
  }
  console.log((avg / sum).toFixed(2));
}
