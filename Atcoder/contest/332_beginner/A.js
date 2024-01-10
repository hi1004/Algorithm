const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [arr, ...r] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const sum = r.map(i => i[0] * i[1]).reduce((acc, cur) => acc + cur, 0);
console.log(sum >= arr[1] ? sum : sum + arr[2]);
