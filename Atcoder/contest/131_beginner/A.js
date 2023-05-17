const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const regex = /(\d)\1/g;
if (String(n).length !== 4) {
  n = String(n).padStart(4, '0');
}

console.log(regex.test(String(n)) ? 'Bad' : 'Good');
