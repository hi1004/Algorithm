const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [S] = fs.readFileSync(file).toString().trim().split(' ');

console.log(S.split('').reverse().join(''));
