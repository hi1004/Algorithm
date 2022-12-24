const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

if (input === 'rose') {
  console.log('I love you');
} else if (input === 'cosmos') {
  console.log('harmony');
} else if (input === 'tulip') {
  console.log('perfect lover');
} else if (input === 'hydrangea') {
  console.log('heartlessness');
} else {
  console.log('amiability');
}
