const [s] = require('fs')
  .readFileSync('./input.txt', 'utf-8')
  .trim()
  .split(' ');

const regexp = /(c=|c-|dz=|d-|lj|nj|s=|z=)/g;

console.log(s.replace(regexp, 'Q').length);
