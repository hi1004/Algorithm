const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

const n = Number(input);
const rest = 1000 - n;
const coin = [500, 100, 50, 10, 5, 1];

let amount = rest;
// while (true) {
//   if (rest >= coin[0]) {
//     amount = amount % coin[0];
//   }
// }

let count = 0;
for (let i = 0; i < coin.length; i++) {
  if (amount >= coin[i]) {
    count += Math.floor(amount / coin[i]);
    amount = amount % coin[i];
  }
}
console.log(count);
