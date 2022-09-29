const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());
const m = Number(input.shift());
const rooms = input.map(room => room.trim().split('').map(Number));

let result = [];
const regexp = new RegExp(n);

rooms.forEach(room => {
  // if (!room.includes(n)) {
  //   result.push(room.join(''));
  // }
  // console.log(room);
  // console.log();
  if (!regexp.test(room.join(''))) {
    result.push(room.join(''));
  }
});
console.log(result.length === 0 ? 'none' : result.join('\n'));
