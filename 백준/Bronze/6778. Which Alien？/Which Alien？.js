const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

if (n >= 3 && m <= 4) {
  console.log('TroyMartian');
}

if (n <= 6 && m >= 2) {
  console.log('VladSaturnian');
}

if (n <= 2 && m <= 3) {
  console.log('GraemeMercurian');
}
