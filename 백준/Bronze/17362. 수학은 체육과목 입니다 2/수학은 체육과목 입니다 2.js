const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let retVal = 0;

switch (n % 8) {
  case 1: {
    retVal = 1;
    break;
  }
  case 0:
  case 2: {
    retVal = 2;
    break;
  }
  case 7:
  case 3: {
    retVal = 3;
    break;
  }
  case 6:
  case 4: {
    retVal = 4;
    break;
  }
  case 5: {
    retVal = 5;
    break;
  }
  default:
    break;
}
console.log(retVal);
