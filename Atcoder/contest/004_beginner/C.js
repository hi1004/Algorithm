const Main = input => {
  const change = input % 30;
  let numbers = [1, 2, 3, 4, 5, 6];
  let temp = 0;
  for (let i = 0; i < change; i++) {
    temp = numbers[i % 5];
    numbers[i % 5] = numbers[(i % 5) + 1];
    numbers[(i % 5) + 1] = temp;
  }
  console.log(numbers.join(''));
};

Main(require('fs').readFileSync('./input.txt', 'utf-8'));
