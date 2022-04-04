const input = require('fs').readFileSync(0).toString().split('\n');

const [x, y] = input;

if (x > 0) {
  console.log(y > 0 ? 1 : 4);
} else {
  console.log(y > 0 ? 2 : 3);
}
