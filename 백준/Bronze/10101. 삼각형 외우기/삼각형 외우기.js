const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const numbers = fs.readFileSync(file).toString().trim().split('\n').map(Number);

function triangle(arr) {
  if (arr.length === 0) return null;
  const sum = arr.reduce((a, b) => a + b, 0);
  const [a, b, c] = arr;
  if (sum === 180) {
    const sameNum = arr.filter((n, i) => arr.indexOf(n) !== i);
    if (sameNum.length === 1) return 'Isosceles';
    else if (sameNum.length === 0) return 'Scalene';
    else {
      return 'Equilateral';
    }
  } else {
    return 'Error';
  }
}

console.log(triangle(numbers));
