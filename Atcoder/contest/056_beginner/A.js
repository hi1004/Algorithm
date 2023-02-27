const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(file).toString().trim().split(/\s+/);

if (A === B) {
  console.log('H');
} else {
  console.log('D');
}
