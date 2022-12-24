const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

if (input === 'R') {
  console.log('P');
} else if (input === 'P') {
  console.log('S');
} else {
  console.log('R');
}
