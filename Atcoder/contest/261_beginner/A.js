const Main = input => {
  const [L1, R1, L2, R2] = input;
  let count = 0;
  for (let i = L1; i < R1; i++) {
    for (let j = L2; j < R2; j++) {
      if (i === j) {
        count++;
        break;
      }
    }
  }

  console.log(count);
};

Main(
  require('fs')
    .readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(' ')
    .map(Number)
);
