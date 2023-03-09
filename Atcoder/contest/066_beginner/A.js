const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

const answer = [];
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    answer.push(input[i] + input[j]);
  }
}
console.log(Math.min(...answer));
