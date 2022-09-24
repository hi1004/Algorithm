const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [w, r] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const c = 2 * w;
const a = 2 * Math.PI * r;
console.log(a + c);
