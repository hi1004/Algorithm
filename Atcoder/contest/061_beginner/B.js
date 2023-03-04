const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N, Q] = input.shift().split(' ').map(Number);
const event = input.slice().map(e => e.split(' ').map(Number));

const collection = {};
let yellow = 0;

for (let i = 1; i <= N; i++) {
  collection[i] = 0;
}

for (const value of event) {
  const [q, x] = value;

  if (q === 1) {
    collection[x] = (collection[x] || 0) + 1;
    if (collection[x] === 2) {
      collection[x] = 'Yes';
      yellow = 0;
    }
  }
  if (q === 2) {
    collection[x] = 'Yes';
  }
  if (q === 3) {
    if (collection[x] === 1 || collection[x] === 0) {
      console.log('No');
    } else {
      console.log(collection[x]);
    }
  }
}

// 3 9
// 3 1 no
// 3 2 no
// 1 3 no
// 2 1
// 3 1
// 1 2
// 1 3 //2
// 3 2
// 3 3
