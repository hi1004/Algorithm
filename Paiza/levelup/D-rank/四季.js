const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [m] = fs.readFileSync(file).toString().trim().split(' ');

if (3 <= m && m <= 5) {
  console.log('spring');
} else if (6 <= m && m <= 8) {
  console.log('summer');
} else if (9 <= m && m <= 11) {
  console.log('autumn');
} else {
  console.log('winter');
}
