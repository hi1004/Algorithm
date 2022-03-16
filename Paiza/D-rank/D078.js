const arr = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(/\s+/)
  .map(el => paseInt(el));

(function solution() {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
  }
  const avg = Math.floor(sum / 7);
  const answer = avg >= arr[7] ? 'pass' : 'failure';

  console.log(answer);
})();
