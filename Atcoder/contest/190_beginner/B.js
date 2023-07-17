const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, s, d], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const answer = a.filter(arr => {
  const [t, m] = arr;
  return s > t && m > d;
});
console.log(answer.length > 0 ? 'Yes' : 'No');
