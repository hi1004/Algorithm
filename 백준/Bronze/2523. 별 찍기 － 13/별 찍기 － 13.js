const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = +fs.readFileSync(file).toString().trim();

for (let i = 1; i < n; i++) {
  console.log('*'.repeat(i));
}
for (let i = n; i >= 1; i--) {
  console.log('*'.repeat(i));
}
