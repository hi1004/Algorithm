const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arrs] = fs.readFileSync(file).toString().trim().split('\n');

const sum =
  arrs.map(arr => Number(arr.split(' ')[1])).reduce((a, b) => a + b, 0) / 2;

let isTrue = false;
for (let arr of arrs) {
  const str = arr.split(' ')[0];
  const n = Number(arr.split(' ')[1]);
  if (n > sum) {
    console.log(str);
    isTrue = false;
    break;
  } else {
    isTrue = true;
  }
}
if (isTrue) console.log('atcoder');
