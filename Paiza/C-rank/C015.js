const Main = line => {
  const n = Number(line[0]);

  const data = line.slice(1).map(val => val.split(' ').map(Number));
  let discount = 0.01;
  let point = 0;
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][0].toString().split('').includes('3')) {
        discount = 0.03;
      } else if (data[i][0].toString().split('').includes('5')) {
        discount = 0.05;
      } else {
        discount = 0.01;
      }
    }
    point += Math.floor(data[i][1] * discount);
  }
  console.log(point);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
