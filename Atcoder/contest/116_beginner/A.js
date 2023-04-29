const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[...nums]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
nums.sort((a, b) => a - b);
console.log((nums[0] * nums[1]) / 2);
