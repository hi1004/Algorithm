const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');

const [H, W] = lines.shift().split(' ').map(Number);

let arr = [];
const resultArr = [];

for (let i = 0; i < W; i++) {
  for (let j = 0; j < H; j++) {
    arr.push(lines[j][i]);
  }
  resultArr.push(arr);
  arr = [];
}

const answer = [];
let count = 0;
resultArr.forEach(arr => {
  count = 0;
  arr.forEach((s, i) => {
    if (s === '#') {
      count++;
    }
  });
  answer.push(count);
});
console.log(answer.join(' '));
