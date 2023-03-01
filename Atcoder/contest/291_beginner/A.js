const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(/\s+/).join('');
console.log(input.match(/[A-Z]/).index + 1);
