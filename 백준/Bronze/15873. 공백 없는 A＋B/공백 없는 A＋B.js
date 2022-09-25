const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const num = fs.readFileSync(file).toString().trim().split('').map(Number);
let a, b;

function solution(arr) {
  if (arr.length <= 2) {
    a = arr.slice(0, 1);
    b = arr.slice(1);
  } else if (arr.length === 3) {
    if (arr[1] !== 0) {
      a = arr.slice(0, 1);
    } else {
      a = arr.slice(0, 2);
    }

    b = arr.slice(1);
  } else {
    a = arr.slice(0, 2);
    b = arr.slice(2);
  }

  return Number(a.join('')) + Number(b.join(''));
}

console.log(solution(num));
