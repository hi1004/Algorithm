const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [a, b] = line[0].split(' ').map(Number);
const chicken = Number(line.pop()) * 2;

if (a + b >= chicken) {
  console.log(a + b - chicken);
} else {
  console.log(a + b);
}
