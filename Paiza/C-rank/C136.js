const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N], ...nums] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
nums = nums.flat();
let init_w = nums.shift();

let max = 0;
let min = 0;
const maxAns = [];
const minAns = [];
for (let i = 0; i < nums.length; i++) {
  if (init_w < nums[i]) {
    max++;
    maxAns.push(max);
    min = 0;
  } else {
    min++;
    minAns.push(min);
    max = 0;
  }
  init_w = nums[i];
}
console.log(
  !minAns.length ? 0 : Math.max(...minAns),
  !maxAns.length ? 0 : Math.max(...maxAns)
);
