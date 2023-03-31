const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

let [N, K] = input.shift().split(' ');
const coins = input.map(Number);
coins.sort((a, b) => b - a);
let cnt = 0;
coins.forEach(coin => {
  cnt += parseInt(K / coin);
  K %= coin;
});
console.log(cnt);
