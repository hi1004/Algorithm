const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const t = input.shift();

for (let i = 0; i < t; i++) {
  const n = input[i];

  const binaryArr = n.toString(2).split('').reverse();
  const answer = [];
  for (let j = 0; j < binaryArr.length; j++) {
    if (binaryArr[j] === '1') {
      answer.push(j);
    }
  }
  console.log(answer.join(' '));
}
