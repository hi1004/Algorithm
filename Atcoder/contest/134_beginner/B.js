const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, d]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let i = 1;
let cut = 0;
let ans = [1];
while (i <= n) {
  cut++; // 1 2
  i += d;
  ans.push(i);
  if (cut === 2 && i <= n) {
    i++;
    ans.push(i);
    cut = 0;
  }
}
ans = ans.filter(v => v <= n);

console.log(Math.ceil(ans.length / 3));
