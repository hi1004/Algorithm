const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N, A, B] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(e => e.trim().split(' '));

let answer = 0;
let dis = '';
function solution(dir, dis) {
  if (dir === 'West') dir = -1;
  else dir = 1;

  if (A <= dis && dis <= B) {
    answer += dis * dir;
  } else if (dis < A) {
    answer += A * dir;
  } else {
    answer += B * dir;
  }
  if (answer === 0) return (dir = '');
  return;
}

for (const val of arr) {
  let direction = val[0];
  let distance = Number(val[1]);

  solution(direction, distance);
}
if (answer > 0) {
  dis = 'East ';
} else if (answer < 0) {
  dis = 'West ';
} else {
  dis = '';
}
console.log(dis + Math.abs(answer));
