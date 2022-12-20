const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const s = input[0].split('').map(s => s.trim());
const t = input[1].split('').map(s => s.trim());

const answer = t.map((val, i) => {
  if (s[i] !== val) {
    return i + 1;
  }
  return '';
});
console.log(answer.filter(n => n !== '')[0]);
