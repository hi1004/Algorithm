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

let top = '';
let bottom = '';

for (let i = 1; i <= n; i++) {
  if (i % 2) {
    top += '* ';
  } else {
    bottom += ' *';
  }
}
for (let i = 1; i <= n; i++) {
  if (n === 1) {
    console.log('*');
    break;
  }
  console.log(top);
  console.log(bottom);
}
