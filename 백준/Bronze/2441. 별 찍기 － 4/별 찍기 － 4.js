const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const arr = [' '];

for (let i = n; i >= 0; i--) {
  console.log(
    ' '
      .repeat(n - i)
      .split('')
      .concat('*'.repeat(i).split(''))
      .join('')
  );
}
