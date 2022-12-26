const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();
const arrs = input.slice().map(num => num.split(' ').map(Number));

let a = 100;
let b = 100;

arrs.forEach(arr => {
  const [n1, n2] = arr;
  if (n1 < n2) {
    a = a - n2;
  } else if (n1 > n2) {
    b = b - n1;
  }
});
console.log(a + '\n' + b);
