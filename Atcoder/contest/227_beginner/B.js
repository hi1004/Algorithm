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

const set = new Set();
a = a.flat();

for (let i = 1; i <= 1000; i++) {
  for (let j = 1; j <= 1000; j++) {
    if (a.includes(4 * i * j + 3 * (i + j))) {
      set.add(4 * i * j + 3 * (i + j));
    }
  }
}

console.log(a.filter(v => ![...set].includes(v)).length);
