const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const members = fs.readFileSync(file).toString().trim().split('\n').map(Number);

members.sort((a, b) => a - b);

for (let i = 1; i <= 30; i++) {
  if (!members.includes(i)) {
    console.log(i);
  }
}
