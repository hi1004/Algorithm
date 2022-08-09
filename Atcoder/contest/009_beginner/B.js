const Main = input => {
  const [N, ...arr] = input;

  arr.sort((a, b) => a - b).reverse();
  const result = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  console.log(result[1]);
};

Main(
  require('fs')
    .readFileSync('./input.txt', 'utf-8')
    .trim()
    .split('\n')
    .map(Number)
);
