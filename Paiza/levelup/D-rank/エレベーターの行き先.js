const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [s1, s2] = fs.readFileSync(file).toString().trim().split(' ');

console.log(s1 < s2 ? 'up' : 'down');
