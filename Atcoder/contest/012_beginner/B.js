const Main = input => {
  input = Number(input);
  const hour = Math.floor(input / (60 * 60));
  const min = Math.floor((input % 3600) / 60);
  const sec = Math.floor((input % 3600) % 60);
  console.log(
    `${hour <= 9 ? `0${hour}` : hour}:${min <= 9 ? `0${min}` : min}:${
      sec <= 9 ? `0${sec}` : sec
    }`
  );
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
