const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
input.pop();
const arrs = input.slice(0).map(arr => arr.split(' ').map(Number));

for (let i = 1; i <= arrs.length; i++) {
  console.log(`Case ${i}: Sorting... done!`);
}
