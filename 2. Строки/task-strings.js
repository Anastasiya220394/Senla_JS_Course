let string = 'string test example';

//Получить первую и последнюю букву строки
console.log( string[0] ); // 's'
console.log( string[string.length - 1] ); // 'e'


//Сделать первую и последнюю буквы в верхнем регистре

let newString = string;
newString = newString[0].toUpperCase() + newString.slice(1, newString.length-1) + newString[newString.length-1].toUpperCase();
  
console.log(newString); // "String test examplE"


//Найти положение слова string в строке
console.log( string.indexOf('string') ); // 0


//Найти положение второго пробела
let position = string.indexOf(' ', string.indexOf(' ') + 1);
console.log(position); // 11


//Получить строку со 2-ого символа длинной 6 букв
console.log( string.slice(1,6) ); // 'tring'


//Получить строку с 1 по 7 символ
console.log( string.slice(0,7) ); // 'string '


//Получить из ух переменных типа number x = 20, y = 21 получить строку '2021' Вернуться к содержанию
let x = 20;
let y = 21;
console.log(String(x)+String(y)); // '2021'