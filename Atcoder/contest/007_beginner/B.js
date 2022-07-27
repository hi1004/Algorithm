const Main = input => {
  input = input.trim().split('');

  let str = '';
  for (let i = 0; i < input.length; i++) {
    str += input[i];
    if (str.length < input.length && input.length > 1) {
      console.log(input.splice(0, input.length - 1).join(''));
    } else {
      if (input[i] === 'a') {
        console.log(-1);
      } else {
        console.log(String.fromCharCode(input[i].charCodeAt() - 1));
      }
    }
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8'));
