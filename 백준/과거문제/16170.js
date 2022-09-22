const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(year);
console.log(month < 10 ? `0${month}` : month);
console.log(day < 10 ? `0${day}` : day);
