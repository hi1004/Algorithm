const [input] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split(' ');

const upperArray = input.split('').map(item => {
  return item.toUpperCase();
});

const arr = upperArray.filter((item, index) => {
  if (upperArray.length === 1) {
    return item;
  }
  return upperArray.indexOf(item) !== index;
});

const result = {};
arr.forEach(x => {
  result[x] = (result[x] || 0) + 1;
});

const lengthArr = Object.values(result);

const max = lengthArr.reduce((acc, crr) => {
  return Math.max(acc, crr);
}, 0);

const maxValue = lengthArr.filter(item => max === item);

const answer = Object.keys(result).find(key => result[key] === max);
maxValue.length > 1 ? console.log('?') : console.log(answer);
