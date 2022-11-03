const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(n => n.split(' ').map(Number));

const roads = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    roads.push(arr[j][i]);
  }
}
const roadArr = [];
for (let i = 0; i < roads.length; i += N) {
  roadArr.push(roads.slice(i, i + N));
}
const answer = [];
roadArr.forEach((road, index) => {
  const result = road.filter(n => n >= M);

  if (result.length === 0) {
    answer.push(index + 1);
  }
});
console.log(answer.length === 0 ? 'wait' : answer.join(' '));
