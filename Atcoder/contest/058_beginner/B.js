const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const O = input[0].trim();
const E = input[1].trim();

let answer = '';

for (let i = 0; i < E.length; i++) {
  answer += O[i] + E[i];
}

if (O.length > E.length) answer += O[E.length];
console.log(answer);
