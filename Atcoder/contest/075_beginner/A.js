const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);
input.sort((a, b) => b - a);
const answer = {};
for (const val of input) {
  answer[val] = (answer[val] || 0) + 1;
}

for (const key in answer) {
  if (answer[key] === 1) {
    console.log(key);
    break;
  }
}
