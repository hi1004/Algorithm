const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(s => (isNaN(s) ? s : +s));

let str = '';

function star(i, j) {
  if (i % 3 === 1 && j % 3 === 1) {
    str += ' ';
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      str += '*';
    } else {
      star(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    star(i, j);
  }

  str += '\n';
}

console.log(str);
