const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [s, k, h] = line;
const collection = {
  [s]: 'Soongsil',
  [k]: 'Korea',
  [h]: 'Hanyang',
};

const sum = line.reduce((acc, cur) => acc + cur);

if (sum < 100) {
  console.log(collection[Math.min(...line)]);
} else {
  console.log('OK');
}
