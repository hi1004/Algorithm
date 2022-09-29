const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lists = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const arr = lists.map(list => list * 5);
console.log(arr.reduce((acc, cur) => acc + cur));
