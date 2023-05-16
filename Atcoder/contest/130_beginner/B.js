const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[x, a], nums] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
nums.unshift(0);
let ans = [0];
for (let i = 1; i < nums.length; i++) {
  let sum = ans[i - 1] + nums[i];
  ans.push(sum);
}
console.log(ans.filter(n => n <= a).length);
