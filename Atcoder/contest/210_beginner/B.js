const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i))
  );

const firstBadCardIndex = s.indexOf('1');

if (firstBadCardIndex % 2 === 0) {
  console.log('Takahashi');
} else {
  console.log('Aoki');
}
