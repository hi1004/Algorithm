const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [T] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [A, B, C] = [300, 60, 10];
let [countA, countB, countC] = [0, 0, 0];

while (T !== 0) {
  if (T >= A) {
    T -= A;
    countA++;
  } else if (T >= B) {
    T -= B;
    countB++;
  } else {
    T -= C;
    countC++;
  }
  if (T < 0) {
    break;
  }
}
const answer = [countA, countB, countC];
console.log(T < 0 ? -1 : answer.join(' '));
