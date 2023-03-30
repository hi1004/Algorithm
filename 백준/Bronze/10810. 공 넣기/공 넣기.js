const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], ...input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));
const answer = {};
for (let i = 1; i <= n; i++) {
  answer[i] = 0;
}

input.forEach(arr => {
  const [s, e, x] = arr;
  for (let i = s; i <= e; i++) {
    answer[i] = x || 0;
  }
});
console.log(Object.values(answer).join(' '));
