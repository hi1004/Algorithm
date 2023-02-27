const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const students = input
  .slice(0, N)
  .map(student => student.split(' ').map(Number));
const checkPoints = input
  .slice(N)
  .map(checkPoint => checkPoint.split(' ').map(Number));

for (let i = 0; i < N; i++) {
  const [a, b] = students[i];
  const answer = [];
  for (let j = 0; j < M; j++) {
    const [c, d] = checkPoints[j];
    const distance = Math.abs(a - c) + Math.abs(b - d);
    answer.push(distance);
  }
  const minPoint = Math.min(...answer);
  console.log(answer.indexOf(minPoint) + 1);
}
