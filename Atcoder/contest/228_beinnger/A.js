const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[S, T, X]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
if (S < T) console.log(S <= X && X < T ? 'Yes' : 'No');
else console.log(X < T || S <= X ? 'Yes' : 'No');
