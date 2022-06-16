const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

const aDays = [];
const bDays = [];
let check = false;

for (let i = 0; i < input[0]; i++) {
  aDays.push(input[i + 1]);
}
for (let i = aDays.length + 1; i < input.length - 1; i++) {
  bDays.push(input[i + 1]);
}

for (let i = 1; i <= 31; i++) {
  if (!check && aDays.includes(i) && bDays.includes(i)) {
    console.log('A');
    check = true;
  } else if (check && aDays.includes(i) && bDays.includes(i)) {
    console.log('B');
    check = false;
  } else if (aDays.includes(i)) {
    console.log('A');
  } else if (bDays.includes(i)) {
    console.log('B');
  } else {
    console.log('x');
  }
}
