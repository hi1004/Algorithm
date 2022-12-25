const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const n = input.shift();
const arr = input.slice().map(e => e.split(' ').map(s => s.trim()));

const pentsLength = arr.filter(item => item.includes('pants')).length;

const prices = [];
arr.forEach(item => {
  const price = Number(item[1]);
  prices.push(price);
});

const sum = prices.reduce((a, b) => a + b, 0);
console.log(sum >= 2000 && pentsLength ? sum - 500 : sum);
