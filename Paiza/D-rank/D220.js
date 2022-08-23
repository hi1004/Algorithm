const Main = input => {
  const [a, b] = input;
  console.log(a + b);
};

Main(
  require('fs')
    .readFileSync('./input.txt', 'utf-8')
    .trim()
    .split('\n')
    .map(Number)
);
