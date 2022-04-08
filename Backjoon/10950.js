const [N] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

for (let i = 1; i <= 9; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
