const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

let multiple = input[0] * input[1] * input[2];
const arr = multiple.toString().split('');
let result = new Array(10).fill(0);
arr.forEach(x => {
  result[x] = (result[x] || 0) + 1;
});
console.log(result.join('\n'));
