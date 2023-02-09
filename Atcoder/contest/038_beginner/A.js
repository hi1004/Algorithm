const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const str = fs.readFileSync(file).toString().trim();

console.log(/T$/g.test(str) ? 'YES' : 'NO');
