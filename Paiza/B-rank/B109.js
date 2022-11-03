const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [N, H, W, P, Q] = input[0].split(' ').map(Number);
const A = input.slice(1).map(num => num.split(' ').map(Number).join(' '));
const arr = [];

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    arr.push([i, j]);
  }
}

const emptyArea = arr.filter(nums => !A.includes(nums.join(' ')));

const answer = {};
emptyArea.forEach((arr, i) => {
  const [p, q] = arr;
  const distance = Math.abs(P - p) + Math.abs(Q - q);
  // answer[[p, q]] = result;
  answer[[p, q]] = distance;
});
const minNum = Math.min(...Object.values(answer));

for (let key in answer) {
  if (answer[key] === minNum) {
    console.log(key.split(',').join(' '));
  }
}
