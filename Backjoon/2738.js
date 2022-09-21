const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [sizeN, sizeM] = line[0].split(' ').map(Number);

const N = line
  .slice(1, sizeN + 1)
  .map(num => num.trim().split(' ').map(Number));

const M = line.slice(sizeN + 1).map(num => num.trim().split(' ').map(Number));

let sumLine = [];
for (let i = 0; i < sizeN; i++) {
  for (let j = 0; j < sizeM; j++) {
    sumLine.push(N[i][j] + M[i][j]);
  }

  console.log(sumLine.join(' '));
  sumLine = [];
}
