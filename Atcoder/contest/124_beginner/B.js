const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...nums]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let ans = 0;
let max = 0;
nums.forEach(x => {
  if (x >= max) {
    ans++;
    max = x;
  }
});
console.log(ans);
