const [n, s] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

const result = s.split('').filter(i => n === i);
console.log(result.length);
