const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const table = input.slice(1).map(n => n.trim().split(' ').map(Number));

function filter(i) {
  return table[i].filter(n => n < 0 || n > 100 || isNaN(n));
}

for (let i = 0; i < N; i++) {
  const init = filter(i);

  for (let j = 0; j < M; j++) {
    if (init.includes(table[i][j]) || isNaN(table[i][j])) {
      table[i][j] = 0;
    }
  }
}

const newTable = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    newTable.push(table[j][i]);
  }
}
const result = [];
for (let i = 0; i < newTable.length; i += N) {
  result.push(newTable.slice(i, i + N));
}

result.forEach(arr => {
  const newArr = arr.filter(n => n !== 0);
  const sum = newArr.reduce((a, b) => a + b, 0);
  const answer = Math.floor(sum / newArr.length);
  console.log(isNaN(answer) ? 0 : answer);
});
console.log(result);
