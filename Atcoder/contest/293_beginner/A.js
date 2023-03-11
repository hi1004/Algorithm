const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(/\s+/).join('');

let answer = '';
for (let i = 0; i < input.length; i += 2) {
  answer += input[i + 1] + input[i];
}
console.log(answer);
