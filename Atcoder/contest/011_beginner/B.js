const Main = input => {
  let str = '';
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      str += input[i].toUpperCase();
    } else {
      str += input[i].toLowerCase();
    }
  }

  console.log(str);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
