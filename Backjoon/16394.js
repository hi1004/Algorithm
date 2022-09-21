const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const year = Number(fs.readFileSync(file).toString().trim());
console.log(year - 1946);
