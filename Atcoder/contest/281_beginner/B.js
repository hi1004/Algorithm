const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [str] = fs.readFileSync(file).toString().trim().split(' ');

const regexp = /^[A-Z][1-9][0-9]{5}[A-Z]$/g;

console.log(regexp.test(str) ? 'Yes' : 'No');
