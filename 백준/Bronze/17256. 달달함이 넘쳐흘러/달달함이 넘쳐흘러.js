const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');
const [ax, ay, az] = line[0].split(' ').map(Number);
const [cx, cy, cz] = line[1].split(' ').map(Number);
// a 🍰 b = (a.z + b.x, a.y × b.y, a.x + b.z)
// a 🍰 b = c

console.log(cx - az, cy / ay, cz - ax);
