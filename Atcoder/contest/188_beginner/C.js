const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const copyA = [...a];

function chunk(data = [], size = 1) {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr.map(a => Math.max(...a));
}

let result = 0;
for (let i = 0; i < n; i++) {
  if (i === n - 1) {
    result = Math.min(...a);
    break;
  }
  a = chunk(a, 2);
}
console.log(copyA.indexOf(result) + 1);
