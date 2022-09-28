const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const speed = b - a;
let money = 0;

if (speed >= 31) {
  money = 500;
} else if (speed >= 21) {
  money = 270;
} else if (speed >= 1) {
  money = 100;
}

const answer =
  speed <= 0
    ? 'Congratulations, you are within the speed limit!'
    : `You are speeding and your fine is $${money}.`;
console.log(answer);
