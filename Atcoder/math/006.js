const [N] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim('')
  .split(' ')
  .map(Number);
console.log(2 * N + 3);
