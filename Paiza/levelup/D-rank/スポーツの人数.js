const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n] = fs.readFileSync(file).toString().trim().split(' ');

const answer = {
  baseball: 9,
  soccer: 11,
  rugby: 15,
  basketball: 5,
  volleyball: 6,
};
console.log(answer[n]);
