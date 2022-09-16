const Main = line => {
  const n = Number(line[0]);

  const data = line.slice(1).map(val => val.split(' ').map(Number));
  let discount = 0.01;
  let point = 0;

  data.forEach(arr => {
    for (let j = 0; j < arr.length; j++) {
      const day = arr[0].toString().split('');
      if (day.includes('3')) {
        discount = 0.03;
      } else if (day.includes('5')) {
        discount = 0.05;
      } else {
        discount = 0.01;
      }
    }
    point += Math.floor(arr[1] * discount);
  });
  console.log(point);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
