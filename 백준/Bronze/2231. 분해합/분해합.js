const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [num] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const arr = [];

function d(n) {
  const N = n.toString().split('');
  return n + N.reduce((acc, cur) => (acc += Number(cur)), 0);
}

for (let i = 1; i <= num; i++) {
  if (d(i) === num) {
    arr.push(i);
  }
}

if (arr.length) {
  console.log(Math.min(...arr));
} else {
  console.log(0);
}
