const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
a = a.flat();
const answer = new Set();

let i;
for (i = 0; i < n; i++) {
  answer.add(a[i]);
  if (answer.size === m) {
    break;
  }
}
console.log(answer.size === m ? i + 1 : 'unlucky');
