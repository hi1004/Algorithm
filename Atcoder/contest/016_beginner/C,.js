const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');
const [n, m] = line.shift().split(' ').map(Number);
const arrs = line.slice().map(arr => arr.split(' ').map(Number));

const collection = {};

for (let i = 1; i <= n; i++) {
  const answer = [];
  for (let j = 0; j < m; j++) {
    const [a, b] = arrs[j];

    if (a === i) {
      answer.push(b);
    } else if (b === i) {
      answer.push(a);
    }
    collection[i] = answer;
  }
}

for (let i = 1; i <= n; i++) {
  const answer = [];
  if (collection[i] === undefined) {
    console.log(0);
    continue;
  }
  for (let j = 0; j < collection[i].length; j++) {
    answer.push(collection[collection[i][j]]);
  }

  console.log(
    [...new Set(answer.flat())].filter(
      n => n !== i && !collection[i].includes(n)
    ).length
  );
}
