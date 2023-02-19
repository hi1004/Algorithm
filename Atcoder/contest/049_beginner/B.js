const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [w, h, ...input] = fs.readFileSync(file).toString().trim().split(/\s+/);

for (let i = 0; i < w * 2; i++) {
  console.log(input[Math.floor(i / 2)]);
}
