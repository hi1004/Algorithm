const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = fs.readFileSync(file).toString().trim().split(/\s+/);

console.log(N === K.split('').reverse().join('') ? 'YES' : 'NO');
