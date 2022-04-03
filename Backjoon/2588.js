const [a, b] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

const first = (b % 100) % 10;
const second = Math.floor(b / 10) % 10;
const third = Math.floor(b / 100);
console.log(`${a * first}\n${a * second}\n${a * third}\n${a * b}`);
