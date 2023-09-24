const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
n = [...n.toString()];
let ans = true;
for (let i = 0; i < n.length - 1; i++) {
  if (n[i] <= n[i + 1]) {
    ans = false;
  }
}
console.log(ans ? 'Yes' : 'No');
