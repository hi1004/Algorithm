const [s] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const exp = /a|e|i|o|u/gi;
const answer = s.replace(exp, '');
console.log(answer);
