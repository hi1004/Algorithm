const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, k] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

if (k * 7 <= x) console.log(k * 7000);
else if (k * 3.5 <= x) console.log(k * 3500);
else if (k * 1.75 <= x) console.log(k * 1750);
else console.log(0);
