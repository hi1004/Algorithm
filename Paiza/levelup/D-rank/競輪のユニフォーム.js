const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const answer = [
  'white',
  'black',
  'red',
  'blue',
  'yellow',
  'green',
  'orange',
  'pink',
  'purple',
];
for (let i = 1; i <= answer.length; i++) {
  if (i === n) {
    console.log(answer[i - 1]);
    break;
  }
}
