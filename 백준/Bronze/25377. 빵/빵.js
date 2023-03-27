const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, ...n] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(s => (isNaN(s) ? s : +s));

const arr = [];
for (let i = 0; i < n.length; i += 2) {
  arr.push(n.slice(i, i + 2));
}
const answer = [];
arr.forEach(v => {
  const [a, b] = v;
  if (a <= b) {
    answer.push(b);
  }
});

if (!answer.length) console.log(-1);
else console.log(Math.min(...answer));
