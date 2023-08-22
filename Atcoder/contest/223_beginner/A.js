const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[str]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
const ist = /ist$/g;
const er = /er$/g;

let ans = '';
if (ist.test(str)) {
  ans = 'ist';
} else {
  ans = 'er';
}
console.log(ans);
