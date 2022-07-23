function Main(input) {
  const a = input[0];
  const b = input[1];

  console.log(Math.max(a, b));
}

Main(
  require('fs')
    .readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(' ')
    .map(Number)
);
