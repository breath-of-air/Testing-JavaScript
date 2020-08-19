/*
console.log(typeof ('' + 5));
console.log(typeof +'5');
console.log(!! 0);
*/
// Функции
/*
function getMessage(name) {
  console.log(name + " - it is your first function!");
}

const name = "Jek";
getMessage();
getMessage(name);
getMessage('Bob');

function creatFullName(name, lastName, secondName) {
  const fullName = name + ' ' + lastName + ' ' + secondName;
  return fullName;
}

fullName = creatFullName(name, 'Jeckovick', 'Jecovsky');
console.log(fullName);
*/
// Операторы сравнения
/*
const a = 10;
const b = 5;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log(a != b);
console.log(a == 10);
console.log(false === 0);
*/
// Условные операторы
/*
const walkDirection = prompt('Where are we going?');

if (walkDirection === 'left') {
  console.log('We should go to the ' + walkDirection);
}else if (walkDirection === 'right') {
  console.log('We should go to the ' + walkDirection)
}else {
  console.log("We won't go anywhere!")
}
*/

// for
function GetOnlyEvenNumbers(count) {
  let result = '';

  for (var i = 0; i < count; i++) {


    if (i % 2 != 0 || i === 0) {
      continue;
    }

    result += i + ' ';
  }
  return result;
}
result = GetOnlyEvenNumbers(100);
console.log(result);
