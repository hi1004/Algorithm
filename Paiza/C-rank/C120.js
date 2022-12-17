const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(inputs.shift());
const str1 = inputs[0].trim();
const str2 = inputs[1].trim();

const newArr = [...str2.split('')];
for (let i = 0; i < N; i++) {
  if (str1 !== newArr.join('')) {
    const pop = newArr.pop();
    newArr.unshift(pop);
  }
}
console.log(newArr.join('') === str1 ? 'Yes' : 'No');
