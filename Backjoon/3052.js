const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const arr = input.map(item => item % 42);
const result = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});
console.log(result.length);
