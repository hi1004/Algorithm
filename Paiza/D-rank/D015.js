const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

for (let i = n; i > 0; i--) {
  console.log(i);
}
