//Придумать название для переменных, которые описывают (let, const)

//имя (постоянное)  
const userName = '';

//фамилия (постоянное) 
const userLastName = '';

//возраст (может изменяться) 
let userAge;

//информация о пользователе ( может изменяться)  
let userInfo = {userName: '', userLastName: '', userAge}

//Что будет в консоле и почему:

// 1
console.log(test);
var test = 'string'; // undefined  

//2
var x = 'string';
var x = 'string 2';
console.log(x); // "string 2" Перезапись переменной

// 3
console.log(test);
let test = 'string'; // error  Объявление переменной после вызова функции

let num = 12;
let num = 1; // error  Повторное объявление той же переменной 