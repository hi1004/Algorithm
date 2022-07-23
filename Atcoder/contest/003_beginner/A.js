function Main(input) {
  input = parseInt(input, 10);
  let sum = 0;
  for (let i = 1; i <= input; i++) {
    sum += i * 10000 * (1 / input);
  }
  console.log(sum);
}

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
