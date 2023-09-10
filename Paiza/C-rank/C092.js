const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N, A, B], ...arr] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let [signals, conveyA, conveyB] = arr.flat();
conveyA = conveyA.split('');
conveyB = conveyB.split('');

let idxA = 0;
let idxB = 0;

for (let i = 0; i < N; i++) {
  if (signals[i] === conveyA[idxA]) {
    idxA++;
  }
  if (signals[i] === conveyB[idxB]) {
    idxB++;
  }
}

console.log(A - idxA, B - idxB);
