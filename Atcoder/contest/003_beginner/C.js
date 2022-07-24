function Main(input) {
  input = input.split('\n');
  const n = input[0].split(' ').map(Number)[1];
  const numbers = input[1].split(' ').map(Number);

  let rate = 0;
  numbers.sort((a, b) => a - b).reverse();

  for (let i = n; i > 0; i--) {
    rate = (rate + numbers[i - 1]) / 2;
  }
  console.log(rate);
}

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
