const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = [];

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
  arr.push(input.indexOf(String.fromCharCode(i)));
}
console.log(arr.join(' '));
