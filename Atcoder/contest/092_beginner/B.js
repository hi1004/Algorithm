const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [d, x], ...a] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let answer = 0;
a.forEach(n => {
  answer += Math.ceil(d / n);
});
console.log(answer + x);
