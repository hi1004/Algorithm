const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

for(let i = 1; i<=n; i++) {
    console.log('*'.repeat(i))
}