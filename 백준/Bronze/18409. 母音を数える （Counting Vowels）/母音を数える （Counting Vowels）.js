const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(line.shift());
const str = line.join(' ');

const boonn = ['a', 'i', 'u', 'e', 'o'];
const result = [];
for (let i = 0; i < N; i++) {
  if (boonn.includes(str[i])) {
    result.push(str[i]);
  }
}
console.log(result.length);
