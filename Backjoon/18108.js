const [A, B, C] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);
console.log(
  `${(A + B) % C}\n${((A % C) + (B % C)) % C}\n${(A * B) % C}\n${
    ((A % C) * (B % C)) % C
  }`
);
