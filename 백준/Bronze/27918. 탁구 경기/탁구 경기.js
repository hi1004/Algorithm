const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
input.shift();
const arr = input.map(s => s.trim());
const answer = {
  D: 0,
  P: 0,
};
arr.forEach(s => {
  if (Math.abs(answer['D'] - answer['P']) === 2) return;
  answer[s] = (answer[s] || 0) + 1;
});
console.log(answer['D'] + ':' + answer['P']);
