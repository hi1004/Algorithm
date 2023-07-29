const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i))
  );

const result = n.split('').map(v => {
  if (v === '6') {
    v = '9';
  } else if (v === '9') {
    v = '6';
  }
  return v;
});
console.log(result.reverse().join(''));
