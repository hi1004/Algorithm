const Main = input => {
  const [a, b] = input;
  function solution(num1, num2) {
    if (num1 === num2) return 0;
    else if (num1 === 1) return num2 - 1;
    else {
      return num2 * (Math.floor(num1 / num2) + 1) - num1;
    }
  }
  console.log(solution(a, b));
};

Main(
  require('fs').readFileSync('./input.txt', 'utf-8').split('\n').map(Number)
);
