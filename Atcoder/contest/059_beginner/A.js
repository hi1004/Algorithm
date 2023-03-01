const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(/\s+/);

console.log(input.map(s => s[0].toUpperCase()).join(''));
