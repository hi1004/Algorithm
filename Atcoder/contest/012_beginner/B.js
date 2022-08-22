const Main = input => {
  const x = Math.floor(input / 3600);

  const min = Math.floor((input % 3600) / 60);

  const y = Math.floor((input % 3600) % 60);

  console.log(
    `${x <= 9 ? `0${x}` : x}:${min <= 9 ? `0${min}` : min}:${
      y <= 9 ? `0${y}` : y
    }`
  );
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
