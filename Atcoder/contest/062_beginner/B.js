const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [H, W] = input.shift().split(' ').map(Number);
const str = input.slice().map(s => s.trim());

console.log('#'.repeat(W + 2));
for (let i = 0; i < H; i++) {
  console.log(`#${str[i]}#`);
}
console.log('#'.repeat(W + 2));
