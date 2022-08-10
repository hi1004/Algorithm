const Main = input => {
  let [n, m] = input[0].split(' ').map(Number);

  let point = 0;
  const pays = input.slice(1).map(pay => Number(pay.trim()));

  for (let i = 0; i < m; i++) {
    if (point >= pays[i]) {
      point -= pays[i];
    } else {
      point += pays[i] * 0.1;
      n -= pays[i];
    }
    console.log(pays[i], n, point);
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
