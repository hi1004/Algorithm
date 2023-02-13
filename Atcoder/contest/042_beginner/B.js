const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M, ...C] = fs.readFileSync(file).toString().trim().split(/\s+/);

console.log(C.sort().join(''));
