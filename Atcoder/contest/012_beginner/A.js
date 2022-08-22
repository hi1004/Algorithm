const Main = input => {
  let [A, B] = input;

  console.log(B, A);
};

Main(
  require('fs')
    .readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(' ')
    .map(Number)
);
