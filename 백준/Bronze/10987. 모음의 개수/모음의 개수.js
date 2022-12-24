const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

const regex = /a|e|i|o|u/g;
console.log(input.match(regex) ? input.match(regex).length : 0);
