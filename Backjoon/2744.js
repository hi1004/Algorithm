const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const str = fs.readFileSync(file).toString().trim();

let new_str = '';
for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) >= 97) {
    new_str += str[i].toUpperCase();
  } else {
    new_str += str[i].toLowerCase();
  }
}
console.log(new_str);
