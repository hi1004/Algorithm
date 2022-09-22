const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');
const [n, m] = line[0].split(' ').map(Number);
const cardNumbers = line[1].split(' ').map(Number);

let sum = 0;
let arr = [];
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      sum = cardNumbers[i] + cardNumbers[j] + cardNumbers[k];
      arr.push(sum);
    }
  }
}
console.log(Math.max(...arr.filter(card => card <= m)));
