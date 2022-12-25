const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n], [...p]] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number));

let m = 0;
let y = 0;

for (let i = 0; i < p.length; i++) {
  y += p[i] % 30 === 0 ? (p[i] / 30 + 1) * 10 : Math.ceil(p[i] / 30) * 10;
  m += p[i] % 60 === 0 ? (p[i] / 60 + 1) * 15 : Math.ceil(p[i] / 60) * 15;
}

if (m === y) console.log('Y M ' + m);
else if (m > y) console.log('Y ' + y);
else console.log('M ' + m);
