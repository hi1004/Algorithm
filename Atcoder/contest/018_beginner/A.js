let x = require('fs').readFileSync('./input.txt', 'utf8');
let ns = x
  .trim()
  .split('\n')
  .map(r => parseInt(r, 10));
let p = [];
for (let loop = 0; loop < 3; loop++) {
  if (ns[loop] == Math.max(...ns)) {
    p.push(1);
  } else if (ns[loop] == Math.min(...ns)) {
    p.push(3);
  } else {
    p.push(2);
  }
}
console.log(p.join('\n'));
