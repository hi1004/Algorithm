const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

let count = 0;
for (let i = 0; i < input.length; i++) {
  const c = input.charAt(i);

  if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
    count++;
  }
}
console.log(count);
