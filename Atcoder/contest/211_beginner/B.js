const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i))
  );
const arr = n.split('').map(v => +v);
let ans = null;
for (let i = 1; i < n.length; i++) {
  if (
    new Set(arr).size === 1 ||
    (new Set(arr).size === 4 && arr[i] - arr[i - 1] === -9) ||
    (new Set(arr).size === 4 && arr[i] - arr[i - 1] === 1)
  ) {
    ans = true;
  } else {
    ans = false;
    break;
  }
}
console.log(ans ? 'Weak' : 'Strong');
