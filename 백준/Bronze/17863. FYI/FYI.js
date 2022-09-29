const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

const regexp = /\b555/;
console.log(regexp.test(input) ? 'YES' : 'NO');
