const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let xArray = [],
  yArray = [];

for (const value of a) {
  const [x, y] = value;
  xArray.push(x);
  yArray.push(y);
}

let x = xArray.sort();
let y = yArray.sort();

console.log(x[0] === x[1] ? x[2] : x[0], y[0] === y[1] ? y[2] : y[0]);
