const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const str = fs.readFileSync(file).toString().trim();

for (let i = 1; i <= 3; i++) {
  if (i === 2) {
    console.log(`:fan::${str}::fan:`);
  } else {
    console.log(`:fan::fan::fan:`);
  }
}
