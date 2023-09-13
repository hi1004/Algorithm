const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[v, a, b, c]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
v = v % (a + b + c);
if (v < a) console.log('F');
else if (v < a + b) console.log('M');
else console.log('T');
