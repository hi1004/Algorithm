const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(s => (isNaN(s) ? s : +s));
input.pop();
input.forEach(n => {
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }
});
