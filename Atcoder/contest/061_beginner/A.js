const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [string] = fs.readFileSync(file).toString().trim().split(/\s+/);

console.log(string.toUpperCase());
