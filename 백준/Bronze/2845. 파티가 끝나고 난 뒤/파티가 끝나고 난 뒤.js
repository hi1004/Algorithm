const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [L, P] = line[0].split(' ').map(Number);
const members = line[1].split(' ').map(Number);

const calcUser = L * P;

const result = members.map(member => member - calcUser);
console.log(result.join(' '));
