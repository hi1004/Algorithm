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
s = s.split('');
let ans = 'No';
for (let i = 0; i < s.length; i++) {
  if (s.length !== t.length) break;
  s.unshift(s.pop());
  if (s.join('') === t) {
    ans = 'Yes';
    break;
  }
}
console.log(ans);
