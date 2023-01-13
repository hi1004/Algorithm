const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

var n = input.match(/^(ch|o|k|u)*$/);
console.log(n == null ? 'NO' : 'YES');
