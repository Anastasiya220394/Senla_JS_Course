let string = 'string test example';

//Получить первую и последнюю букву строки
alert( string[0] );
alert( string[string.length - 1] );


//Сделать первую и последнюю буквы в верхнем регистре
alert( string[0].toUpperCase() );
alert( string[string.length - 1].toUpperCase() );


//Найти положение слова string в строке
alert( string.indexOf('string') );


//Найти положение второго пробела
let position = string.indexOf(' ', string.indexOf(' ') + 1);
console.log(position);


//Получить строку со 2-ого символа длинной 6 букв
alert( string.slice(1,6) );


//Получить строку с 1 по 7 символ
alert( string.slice(0,7) );


//Получить из ух переменных типа number x = 20, y = 21 получить строку '2021' Вернуться к содержанию
let x = 20;
let y = 21;
console.log(String(x)+String(y));