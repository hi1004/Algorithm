const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(`int a;\nint *ptr = &a;`);
for (let i = 2; i <= x; i++) {
  console.log(`int ${'*'.repeat(i)}ptr${i} = &ptr${i - 1 === 1 ? '' : i - 1};`);
}
