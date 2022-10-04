const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const str = fs.readFileSync(file).toString().trim();

const S = (str.length + 1) / 2;
console.log(str[S - 1]);
