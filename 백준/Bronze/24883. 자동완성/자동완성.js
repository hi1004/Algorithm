const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

const regex = /n/gi;
console.log(regex.test(input) ? 'Naver D2' : 'Naver Whale');
