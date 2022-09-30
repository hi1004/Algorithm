const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

for (let i = 0; i < a; i++) {
  console.log('*'.repeat(b));
}
