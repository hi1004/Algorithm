const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [S, T] = input.map(s => s.trim());

const regex = new RegExp('^' + S, 'g');

console.log(regex.test(T) ? 'Yes' : 'No');
