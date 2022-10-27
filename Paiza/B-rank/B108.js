const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [N, M] = line[0].split(' ').map(Number);
const A = line.slice(1, N + 1).map(n => Number(n));
const B = line.slice(N + 1).map(n => Number(n));

const arr = Array.from({ length: N }, () => 0);

let count = 0;
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (count === N) {
      count = 0;
    }

    if (A[count] <= B[i]) {
      arr[count] += A[count];
      B[i] = B[i] - A[count];
      count++;
    } else {
      if (B[i] === 0) {
        arr[count] += 0;
      } else {
        arr[count] += B[i];
        B[i] = 0;
      }

      count++;
    }
    if (B[i] === 0) {
      break;
    }
  }
}

console.log(arr.join('\n'));
