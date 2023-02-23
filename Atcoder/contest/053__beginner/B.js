const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [str] = fs.readFileSync(file).toString().trim().split(/\s+/);

const regex = /A.*Z/;
const match = str.match(regex);

if (match) {
  const length = match[0].length;
  console.log(length);
}
