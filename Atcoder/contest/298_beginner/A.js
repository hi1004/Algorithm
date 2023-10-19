const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

if (s.includes('o') && !s.includes('x')) {
  console.log('Yes');
} else {
  console.log('No');
}
