const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

for (let i = 0; i < line.length; i++) {
  const [n, s] = line[i].split(' ').map(Number);
  console.log(Math.floor(s / (n + 1)));
}
