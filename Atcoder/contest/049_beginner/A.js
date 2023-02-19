const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [str] = fs.readFileSync(file).toString().trim().split(/\s+/);

console.log(/a|e|i|o|u/g.test(str) ? 'vowel' : 'consonant');
