const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, S] = fs.readFileSync(file).toString().trim().split(/\s+/);
N = Number(N);

const target = {};
let x = 0,
  y = 0;
target[`0,0`] = 1;

[...S].forEach((s, i) => {
  if (s === 'R') x++;
  if (s === 'L') x--;
  if (s === 'U') y++;
  if (s === 'D') y--;
  const print = `${x},${y}`;

  if (target[print]) {
    target[print]++;
  } else {
    target[print] = 1;
  }
});
console.log(Object.values(target).filter(x => x > 1).length ? 'Yes' : 'No');
