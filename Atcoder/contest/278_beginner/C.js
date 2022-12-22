const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const [n, q] = input.shift().split(' ').map(Number);
const nums = input.slice().map(num => num.split(' ').map(Number));
const f = {};
nums.forEach(e => {
  const [t, a, b] = e;
  if (t == 1) {
    f[a + ' ' + b] = true;
  }
  if (t == 2) {
    delete f[a + ' ' + b];
  }
  if (t == 3) {
    console.log(f[a + ' ' + b] && f[b + ' ' + a] ? 'Yes' : 'No');
  }
});
