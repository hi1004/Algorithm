function Main(input) {
  const n = parseInt(input);
  console.log(Math.floor(n / 2 + (n % 2)));
}

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
