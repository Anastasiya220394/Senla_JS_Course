//Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.

function multiply(...args) {

  for (let i = 0; i < args.length; i++) {
      if (isNaN(args[i])) {
          console.log(args[i] + ' - это не число');
      } else {
          console.log(args[i] + ' - это число');
      }

  }

  let x = 1;
  if (args.length == 0) {
      return 0;
  }
  for (let i = 0; i < args.length; i++) {
      x *= args[i];
  }
  return x;
}

console.log(multiply(1, 2, 3)); // 6



//С помощью ри курсе вычислить факториал числа 10.

function factorial(n) {
  
  if(isNaN(n)) {
  console.log(n + " - это не число");
} else {
  console.log(n + " - это число");
}

  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(10) ); //3628800



//Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'.

function reverseString(str) {

  if(typeof str === "string") {
     console.log(str + " - это строка");
  } else {
     console.log(str + " - это что-то другое");
  }

      return str.split("").reverse().join("");
  
  }
  
  console.log(reverseString('test')); //"tset"

//второй вариант

let str = 'test'; 
function r(str) {
 return str === '' ? '' : r(str.slice(1)) + str[0];
}
console.log(r('test')); //"tset"



//Написать функцию, которая проверяет является ли слово палиндромом

function checkIsPalindrom(str) {

  if(typeof str === "string") {
     console.log(str + " - это строка");
  } else {
     console.log(str + " - это что-то другое");
  }
  
    strReverse = str.split('').reverse().join('');
  
      if (strReverse == str) {
          return 'yes';
        } else {
          return 'no';
            }
  
      }
  
  console.log(checkIsPalindrom('ololo')); //yes


//Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111")

function replaceOnUnicode(str) {

  if(typeof str === "string") {
       console.log(str + " - это строка");
    } else {
       console.log(str + " - это что-то другое");
    }
    
    
      let output = "";
      for (i = 0; i < str.length; i++) {
          output += str.charCodeAt(i) + " ";
      }
      return output.trim();
  }
   
  console.log(replaceOnUnicode('bye')); //"98 121 101"
    


//Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'

function outSymbolsOfStr(str) {
  if (str.length > 0) {
    console.log(str[0]);
    let str1 = str.slice(1, str.length);
    return outSymbolsOfStr(str1);
  } 
}

outSymbolsOfStr('test'); // 't' 'e' 's' 't'
 
 

//Создать две функции и дать им осмысленные названия:

//первая функция принимает массив и callback, возвращая строку из обработанного массива.

//вторая функция (callback) обрабатывает каждый элемент массива

let arr = ['a', 'b', 'c', 'd'];
 

 function returnStr(array1, callback) {
 
 if(typeof arguments === "object") {
     console.log(arguments + " - это объект");
  } else {
    console.log(arguments + " - это что-то другое");
 }
 return callback(array1);
}
 

 function processStr(array2) {
 
 for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
    }
    return array2;
}
 
 returnStr(arr, processStr); // 'a', 'b', 'c', 'd'
