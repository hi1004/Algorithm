const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const user1 = line[0].split(' ').map(Number);
const user2 = line[1].split(' ').map(Number);

function solution(arr1, arr2) {
  const S = arr1.reduce((acc, cur) => acc + cur);
  const T = arr2.reduce((acc, cur) => acc + cur);
  return Math.max(S, T);
}

console.log(solution(user1, user2));
