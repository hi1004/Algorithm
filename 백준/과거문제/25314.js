const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [number] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const bite = 'long ';

console.log(bite.repeat(number / 4) + 'int');
