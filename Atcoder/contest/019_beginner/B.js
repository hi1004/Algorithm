const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const str = fs.readFileSync(file).toString().trim();
let prev = str[0];
let count = 1;
let new_s = '';

for (let i = 1; i < str.length; i++) {
  if (str[i] === prev) count++;
  else {
    new_s += prev + count;
    prev = str[i];
    count = 1;
  }
}
new_s += prev + count;
console.log(new_s);
