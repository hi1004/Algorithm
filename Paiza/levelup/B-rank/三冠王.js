const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());
const scores = input.slice().map(score => score.split(' ').map(Number));

const listA = [];
const listB = [];
const listC = [];
const collection = {};

scores.forEach(score => {
  const [a, b, c] = score;
  listA.push(a);
  listB.push(b);
  listC.push(c);
  collection[[score.join(' ')]] = 0;
});
const maxListA = Math.max(...listA);
const maxListB = Math.max(...listB);
const maxListC = Math.max(...listC);

const maxArr = [];
maxArr.push(maxListA);
maxArr.push(maxListB);
maxArr.push(maxListC);

for (let key in collection) {
  const keys = key.split(' ').map(Number);
  for (let i = 0; i < n; i++) {
    if (maxArr.includes(keys[i])) {
      collection[key]++;
    }
  }
}

const king = Math.max(...Object.values(collection));

if (king === 3) {
  console.log('Triple');
} else if (king === 2) {
  console.log('Double');
} else {
  console.log('Nobody');
}
