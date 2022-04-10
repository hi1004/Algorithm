const [input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

// charCodeAt
console.log(input.charCodeAt());
