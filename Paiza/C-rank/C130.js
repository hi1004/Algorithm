const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const answer = [];
a.forEach((day, i) => {
  if (!day.every(v => v === 'y')) {
    answer.push(i + 1);
  }
});
answer.unshift(answer.length);
console.log(answer.join('\n'));
