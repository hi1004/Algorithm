const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const points = [1, 2, 4];
const filterArrA = points.filter(point => point <= A);
const filterArrB = points.filter(point => point <= B);

if (!filterArrA.length && !filterArrB.length) {
  console.log(0);
} else if (A > 0 && B > 0) {
  const maxA = Math.max(...filterArrA);
  const minA = A - maxA;
  const maxB = Math.max(...filterArrB);
  const minB = B - maxB;
  const result = [maxA, minA, maxB, minB];

  const set = new Set(result);
  console.log([...set].reduce((a, b) => a + b));
} else {
  console.log(A === 0 ? B : A);
}

// console.log(A | B);
