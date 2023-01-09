const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const words = fs.readFileSync(file).toString().trim().split('\n');

const n = words.shift();
const arr = words.slice().map(word => word.trim());
arr.reverse().forEach(w => console.log(w));
