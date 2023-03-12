const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [str] = fs.readFileSync(file).toString().trim().split(/\s+/);

console.log(str[0] + (str.length - 2) + str[str.length - 1]);
