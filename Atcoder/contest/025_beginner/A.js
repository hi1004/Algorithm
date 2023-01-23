const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const str = input[0].trim();
const n = input[1];
const answer = [];
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    answer.push(str[i] + str[j]);
  }
}
console.log(answer[n - 1]);
