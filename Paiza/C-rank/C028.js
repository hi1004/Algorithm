const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(line.shift());

let score = 0;

for (let i = 0; i < N; i++) {
  const [q, a] = line[i].trim().split(' ');
  const regexp = new RegExp(q, 'gim');
  if (q.length !== a.length) score += 0;

  if (q.length === a.length) {
    let count = 0;
    if (regexp.test(a)) score += 2;

    for (let j = 0; j < q.length; j++) {
      if (q[j] !== a[j]) {
        count++;
      }
    }
    if (count === 1) score += 1;
    else if (count > 1) score += 0;
  }
}
console.log(score);
