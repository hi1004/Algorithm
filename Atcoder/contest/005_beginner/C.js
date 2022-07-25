'use strict';

const main = arg => {
  arg = arg.trim().split('\n');
  const T = parseInt(arg[0]);
  const N = parseInt(arg[1]);
  const times = arg[2].split(' ').map(n => parseInt(n));
  const M = parseInt(arg[3]);
  const customers = arg[4].split(' ').map(n => parseInt(n));

  for (let i in customers) {
    let eatTako = times.filter(
      time => customers[i] - time <= T && customers[i] - time >= 0
    )[0];

    if (!eatTako) {
      console.log('no');
      return;
    }

    times.splice(times.indexOf(eatTako), 1);
  }

  console.log('yes');
};
main(require('fs').readFileSync('./input.txt', 'utf8'));
