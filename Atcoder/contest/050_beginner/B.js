const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const N = input.shift();
const T = input.shift().split(' ').map(Number);
const M = input.shift();
const arr = input.slice().map(i => i.split(' ').map(Number));

for (let val of arr) {
  let copyT = [...T];
  const [P, X] = val;
  copyT[P - 1] = X;
  console.log(copyT.reduce((a, b) => a + b, 0));
}
