const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [s] = fs.readFileSync(file).toString().trim().split(/\s+/);
console.log(s.length === [...new Set(s.split(''))].length ? 'yes' : 'no');
