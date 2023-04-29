const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const set = new Set();
set.add(s);

let t = s;
let i = 1;
while (true) {
  i++;
  t = t % 2 === 0 ? t / 2 : 3 * t + 1;
  if (set.has(t)) {
    console.log(i);
    return;
  }
  set.add(t);
}
