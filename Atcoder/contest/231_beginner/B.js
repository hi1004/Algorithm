const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
const names = {};
for (let value of a) {
  names[value] = (names[value] || 0) + 1;
}
const max = Math.max(...Object.values(names));
for (let key in names) {
  if (names[key] === max) {
    console.log(key);
    break;
  }
}
