const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s], [t]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
if (s === t) console.log('Yes');

for (let i = 0; i < s.length; i++) {
  if (s[i] === t[i]) continue;

  console.log(s[i] === t[i + 1] && s[i + 1] === t[i] ? 'Yes' : 'No');
  break;
}
