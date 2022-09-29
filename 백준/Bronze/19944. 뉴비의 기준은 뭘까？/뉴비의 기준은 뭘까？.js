const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

if (m == 1 || m == 2) console.log('NEWBIE!');
else if (m <= n) console.log('OLDBIE!');
else console.log('TLE!');
