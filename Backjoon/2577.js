const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

let multiple = input.reduce((acc, cur) => acc * cur, input[0]);
const arr = multiple.toString().split('');
let result = new Array(10).fill(0);
arr.forEach(x => {
  result[x] = (result[x] || 0) + 1;
});
console.log(result.join('\n'));
