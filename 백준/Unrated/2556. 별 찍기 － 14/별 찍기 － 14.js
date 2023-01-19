const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

for (let i = 0; i < n; i++) {
  let str = '';
  for (let j = 0; j < n; j++) {
    str += '*';
  }
  console.log(str);
}
