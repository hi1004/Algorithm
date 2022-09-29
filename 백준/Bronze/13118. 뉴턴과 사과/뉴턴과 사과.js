const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const persons = line[0].split(' ').map(Number);
const [x, y, r] = line[1].split(' ').map(Number);

console.log(persons.includes(x) ? persons.indexOf(x) + 1 : 0);
