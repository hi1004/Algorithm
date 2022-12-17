const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(inputs.shift());
const nums = inputs[0].split(' ').map(Number);

const arrs = Array.from(Array(N), (n, i) => i + 1);
// console.log(arrs);

for (let i = 0; i < factorial(N) / 2; i++) {
  for (let j = 1; j <= factorial(N - 1); j++) {
    console.log(arrs);
    if (arrs[j] < arrs[j + 1]) {
      const temp = arrs[j + 1];
      arrs[j + 1] = arrs[j];
      arrs[j] = temp;
    }
    console.log(j, j + 1);
  }
  const isFindNumber = element => element === i + 2;
  const findIndex = arrs.findIndex(isFindNumber);
  const pop = arrs.splice(findIndex, 1);
  arrs.unshift(pop);
  console.log('end');
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
