const [A, B] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split(' ')
  .map(Number);
console.log(A - B);
