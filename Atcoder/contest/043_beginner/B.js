const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [s] = fs.readFileSync(file).toString().trim().split(/\s+/);
const answer = [];
[...s].forEach(item => {
  if (item === '0') {
    answer.push('0');
  } else if (item === '1') {
    answer.push('1');
  } else {
    answer.pop();
  }
});
console.log(answer.join(''));
