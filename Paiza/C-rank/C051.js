const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');
input.sort((a, b) => b - a);

const collection = {};

let arrs = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 1 + i; j < input.length; j++) {
    arrs.push(input[i] + input[j]);
  }
}
const reverse = arrs.map(n => n.split('').reverse().join(''));

let concatArr = arrs.concat(reverse);

let newArr = [...input];

let temp = [];
let result = [];
const answer = [];
concatArr.forEach(num => {
  const [a, b] = num.split('');
  newArr = [...input];
  temp = [];
  result = [];
  temp.push(...num.split(''));

  newArr.splice(newArr.indexOf(a), 1);

  newArr.splice(newArr.indexOf(b), 1);

  result.push(newArr.flat());

  answer.push(Number(temp.join('')) + Number(result.flat().join('')));
});
console.log(Math.max(...answer));
