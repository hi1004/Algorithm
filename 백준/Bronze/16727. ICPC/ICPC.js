const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');
const [p1, s1] = line[0].split(' ').map(Number);
const [s2, p2] = line[1].split(' ').map(Number);
const p = p1 + p2;
const s = s1 + s2;
if (p === s) {
  if (p1 === s2) {
    console.log('Penalty');
  } else if (p1 > s2) {
    console.log('Esteghlal');
  } else {
    console.log('Persepolis');
  }
} else if (p > s) {
  console.log('Persepolis');
} else {
  console.log('Esteghlal');
}
