const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let arr = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  )
  .flat();

console.log(arr[0] - (arr[1] + arr[2]));
