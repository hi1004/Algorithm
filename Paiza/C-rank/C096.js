const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());
const days = input.slice().map(day => day.split(' ').map(Number));

let sortedDay = days.flat().sort((a, b) => a - b);

const allDayArr = [];

days.forEach(day => {
  const [startDay, endDay] = day;

  const dayArr = [];
  for (let i = sortedDay[0]; i <= sortedDay[sortedDay.length - 1]; i++) {
    if (startDay <= i && endDay >= i) {
      dayArr.push(i);
    }
  }

  allDayArr.push(dayArr);
});

sortedDay = allDayArr.flat().sort((a, b) => a - b);

const collection = {};
for (let val of sortedDay) {
  collection[val] = (collection[val] || 0) + 1;
}

const answer = Object.values(collection).includes(n) ? 'OK' : 'NG';
console.log(answer);
