const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();
const [s1, s2] = input.split(' ').map(s => s.trim());

console.log(s1 + s2);
