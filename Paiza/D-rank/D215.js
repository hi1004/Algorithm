const Main = input => {
  input = input.trim();
  if (input === 'paiza') {
    console.log('Yes');
  } else {
    console.log('No');
  }
};

Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
