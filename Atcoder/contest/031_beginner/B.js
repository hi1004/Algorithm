const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [L, H] = input.shift().split(' ').map(Number);
const N = input.shift();
const arrs = input.slice().map(n => Number(n));

arrs.forEach(n => {
  if (n < L) {
    console.log(L - n);
  } else if (n > H) {
    console.log(-1);
  } else {
    console.log(0);
  }
});
