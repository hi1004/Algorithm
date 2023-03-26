const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [school] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(s => (isNaN(s) ? s : +s));

const schools = {
  NLCS: 'North London Collegiate School',
  BHA: 'Branksome Hall Asia',
  KIS: 'Korea International School',
  SJA: 'St. Johnsbury Academy',
};

console.log(schools[school]);
