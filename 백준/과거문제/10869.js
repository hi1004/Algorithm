const [A, B] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split(' ')
  .map(Number);
console.log(`${A + B}\n${A - B}\n${A * B}\n${Math.floor(A / B)}\n${A % B}`);
