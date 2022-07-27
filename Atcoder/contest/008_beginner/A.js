function Main(input) {
  const [n, m] = input;
  console.log(m - n + 1);
}

Main(
  require('fs')
    .readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(' ')
    .map(Number)
);
