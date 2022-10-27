const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const arr = [];
for (let i = 1; i <= parseInt(Math.sqrt(N)); i++) {
  if (N % i === 0) {
    arr.push(i);
    arr.push(N / i);
  }
}
arr.sort((a, b) => a - b);

arr.forEach(ans => console.log(ans));
