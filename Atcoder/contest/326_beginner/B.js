const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
for (let i = n; i <= 919; i++) {
  if (
    i.toString().split('')[0] * i.toString().split('')[1] ==
    i.toString().split('')[2]
  ) {
    console.log(i);
    break;
  }
}
