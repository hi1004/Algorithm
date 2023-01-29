const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

if (N <= 59) {
  console.log('Bad');
} else if (N >= 60 && N <= 89) {
  console.log('Good');
} else if (N >= 90 && N <= 99) {
  console.log('Great');
} else {
  console.log('Perfect');
}
