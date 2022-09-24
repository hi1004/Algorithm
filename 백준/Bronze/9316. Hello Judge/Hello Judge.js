const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

for (let i = 1; i <= N; i++) {
  console.log(`Hello World, Judge ${i}!`);
}
