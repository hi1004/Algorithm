const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const arr = line.slice(1).map(str => str.trim());

arr.forEach(str => {
  console.log(str.split('').reverse().join(''));
});
