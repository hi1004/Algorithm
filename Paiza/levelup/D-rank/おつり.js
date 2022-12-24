const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [p] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const coin = [1, 5, 10, 50, 100, 500];
coin.reverse();

let price = p;
let count = 0;

coin.forEach(c => {
  count += Math.floor(price / c);
  price %= c;
});
console.log(count);
