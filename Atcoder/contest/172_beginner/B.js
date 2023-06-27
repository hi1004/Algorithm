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
let str_s = '';
let str_t = '';
for (let i = 0; i < s.length; i++) {
  if (s[i] === t[i]) continue;
  str_s += s[i];
  str_t += t[i];
}
console.log(Math.min(str_s.length, str_t.length));
