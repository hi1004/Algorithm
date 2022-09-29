const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const str = fs.readFileSync(file).toString().trim();

const regexp = /[가-힣]/gm;

console.log(str.charCodeAt() - 44031);
