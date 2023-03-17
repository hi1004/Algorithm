const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(/\s+/);

console.log(N.includes('9') ? 'Yes' : 'No');
