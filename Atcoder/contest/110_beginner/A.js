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
nums.sort((a, b) => b - a);
console.log(Number(String(nums[0]) + String(nums[1])) + nums[2]);
