const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...days] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  )
  .flat();

const aDays = days.slice(1, days[0] + 1);
const bDays = days.slice(days[0] + 2);
let ans = [],
  isRive = false;

for (let i = 1; i <= 31; i++) {
  if (aDays.includes(i) && bDays.includes(i)) {
    !isRive ? ans.push('A') : ans.push('B');
    isRive = !isRive;
  } else if (aDays.includes(i)) ans.push('A');
  else if (bDays.includes(i)) ans.push('B');
  else ans.push('x');
}
console.log(ans.join('\n'));
