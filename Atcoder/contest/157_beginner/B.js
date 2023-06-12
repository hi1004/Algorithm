const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[...a1], [...a2], [...a3], [n], ...b] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const table = [a1, a2, a3];

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const nums = Array.from(Array(3), () => Array(3).fill(0));
const bingo = [];
let count = 0;
for (let i = 0; i < table.length; i++) {
  for (let j = 0; j < table[i].length; j++) {
    nums[i][j] = count++;
    for (let k = 0; k < n; k++) {
      if (table[i][j] === b[k][0]) bingo.push(nums[i][j]);
    }
  }
}
let ans = 'No';
for (let i = 0; i < lines.length; i++) {
  let cut = 0;
  bingo.forEach(v => {
    if (lines[i].includes(v)) cut++;
    if (cut >= 3) {
      ans = 'Yes';
      return;
    }
  });
}
console.log(ans);
