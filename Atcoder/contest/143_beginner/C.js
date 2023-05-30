const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let count = 1;
for (let i = 0; i < n - 1; i++) {
  if (s[i] !== s[i + 1]) count++;
}
console.log(count);
