const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(s => s.trim().split(''));

const arr1 = [];
const arr2 = [];
input.forEach((arr, i) => {
  if (arr.includes('#')) {
    arr1.push(i + 1);

    arr.forEach((s, i) => {
      if (s === '#') {
        arr2.push(i + 1);
      }
    });
  }
});

const [A, B] = [Math.min(...arr1), Math.max(...arr1)];
const [C, D] = [Math.min(...arr2), Math.max(...arr2)];
console.log(A, B + '\n' + C, D);
