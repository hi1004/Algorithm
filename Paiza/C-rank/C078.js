const Main = line => {
  const [n, c_1, c_2] = line[0].split(' ').map(Number);
  const prices = line.slice(1).map(Number);

  function solution(arr) {
    let kabu = 0;
    let profit = 0;
    for (let val of arr) {
      if (val <= c_1) {
        kabu++;
        profit -= val;
      } else if (val >= c_2) {
        profit += val * kabu;
        kabu = 0;
      }

      if (arr.indexOf(val) === n - 1) {
        profit += val * kabu;
        return profit;
      }
    }
  }

  console.log(solution(prices));
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
