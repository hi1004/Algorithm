const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(/\s+/);

console.log(
  a.split('').sort().join('') < b.split('').sort().reverse('').join('')
    ? 'Yes'
    : 'No'
);
