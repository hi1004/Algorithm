const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');
const n = input.shift();
const arrs = input.slice().map(n => n.split(' ').map(Number));

arrs.forEach(arr => {
  const [a, b, c] = arr;
  if (a < b - c) {
    console.log('advertise');
  } else if (a > b - c) {
    console.log('do not advertise');
  } else {
    console.log('does not matter');
  }
});
