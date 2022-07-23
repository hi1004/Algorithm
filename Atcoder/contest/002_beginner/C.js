const Main = input => {
  let [xa, ya, xb, yb, xc, yc] = input;
  xb -= xa;
  yb -= ya;
  xc -= xa;
  yc -= ya;

  // Math.abs(ad-bc)/2
  const area = Math.abs(xb * yc - yb * xc) / 2;
  console.log(area);
};

Main(
  require('fs')
    .readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(' ')
    .map(Number)
);
