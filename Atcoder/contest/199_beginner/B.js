const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...a], [...b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const answer = {};
for (let i = 0; i < n; i++) {
  for (let j = a[i]; j <= b[i]; j++) {
    answer[j] = (answer[j] || 0) + 1;
  }
}
let count = 0;
for (const key in answer) {
  if (answer[key] === n) count++;
}
console.log(count);
