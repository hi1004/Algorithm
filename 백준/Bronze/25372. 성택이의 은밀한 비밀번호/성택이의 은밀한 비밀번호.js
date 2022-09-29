const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');
const n = Number(line[0]);
const passwords = line.slice(1).map(list => list.trim());

passwords.forEach(password => {
  console.log(password.length >= 6 && password.length <= 9 ? 'yes' : 'no');
});
