//В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"

let string = 'Я стану крутым программистом';
let string2 = '';
for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
        string2 += string[i];
        string2 += string[i + 1].toUpperCase();
        i++;
    }
    else { string2 += string[i]; }
}

console.log(string2); // "Я Стану Крутым Программистом"



//Вычислить факториал числа 9.

let n = 9;
let result = 1;
while(n) {
    result *= n--;
}

console.log(result); // 362880



//Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"

let string = 'Просветление наступит через: ';
for (let i = 10; i > 0; i = i - 1) {
    if (i === 1) {
    string += i;
    }
    else {string += i + ", ";}
}

console.log(string); // "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"



//Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.

for (i = 0; i < 20; i++) {
    if (i % 2 != 0) {
    console.log(i); // 1 3 5 7 9 11 13 15 17 19
    }               
}



//На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.

let string = 'теперь я мастер циклов javascript';
let string2 = '';


for (let i = 0; i < string.length; i++) {
  if (string[i] === ' ') continue;
    if (string[i-1] === ' ' || !string[i-1]) {
        string2 += string[i].toUpperCase();
    }
      else { string2 += string[i];
    }
}

console.log(string2); // "ТеперьЯМастерЦикловJavascript"