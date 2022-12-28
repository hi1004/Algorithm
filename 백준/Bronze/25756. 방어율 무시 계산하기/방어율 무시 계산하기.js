const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n], [...arr]] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(n => n.split(' ').map(Number));

let v = 1;
let answer = [];

arr.forEach(n => {
  v *= 1 - n / 100;

  answer.push((1 - v) * 100);
});
// console.log(answer);
answer.forEach(result => console.log(result));
