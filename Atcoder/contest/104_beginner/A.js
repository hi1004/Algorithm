const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[r]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
if (r < 1200) {
  console.log('ABC');
} else if (r < 2800) {
  console.log('ARC');
} else {
  console.log('AGC');
}
