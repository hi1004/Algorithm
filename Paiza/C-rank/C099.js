const [N, D, ...a] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(/\s+/)
  .map(Number);

let bottomLength = D;
for (let i = 0; i < N - 1; i++) {
  bottomLength += D - a[i];
}
const answer = bottomLength * D;
console.log(answer);
