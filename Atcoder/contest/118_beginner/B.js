const { CLIENT_RENEG_LIMIT } = require('tls');

const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], ...inputs] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const collection = {};
inputs.forEach(input => {
  input.shift();

  for (const val of input) {
    collection[val] = (collection[val] || 0) + 1;
  }
});

let ans = 0;
for (const key in collection) {
  if (collection[key] === n) ans++;
}
console.log(ans);
