const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(/\s+/);
console.log(n === n.split('').reverse().join('') ? 'Yes' : 'No');
