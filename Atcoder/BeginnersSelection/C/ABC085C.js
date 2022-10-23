const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, Y] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

function soltuion(n, y) {
  const money = [10000, 5000, 1000];
  const answer = {};
  for (let m of money) {
    answer[m] = -1;
  }

  for (let a = 0; a <= n; a++) {
    for (let b = 0; b + a <= n; b++) {
      let c = n - a - b;
      let total = 10000 * a + 5000 * b + 1000 * c;

      if (total === y) {
        answer[10000] = a;
        answer[5000] = b;
        answer[1000] = c;
      }
    }
  }
  return Object.values(answer).reverse().join(' ');
}

console.log(soltuion(N, Y));
