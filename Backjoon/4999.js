const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const str = fs.readFileSync(file).toString().trim().split('\n');

const user = str[0].trim();
const doctor = str[1].trim();

console.log(user.length >= doctor.length ? 'go' : 'no');
