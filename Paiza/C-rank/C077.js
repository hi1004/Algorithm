const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(n => n.split(' ').map(Number));

function scoreEvaluate(num) {
  if (80 <= num && num <= 100) {
    return 'A';
  } else if (70 <= num) {
    return 'B';
  } else if (60 <= num) {
    return 'C';
  } else {
    return 'D';
  }
}

for (let i = 0; i < k; i++) {
  const [day, ans] = input[i + 1].split(' ').map(Number);
  const score = Math.floor(100 / n) * ans;
  if (day <= 0) {
    console.log(scoreEvaluate(score));
  } else if (1 <= day && day <= 9) {
    console.log(scoreEvaluate(score * 0.8));
  } else {
    console.log(scoreEvaluate(0));
  }
}
