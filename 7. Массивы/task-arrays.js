//Используя функцию, найти последний элемент массива, не изменяя его.

let myArray = [1, 2, 3, 4, 10, 15];

function returnLastItem(arr) {
  return arr[arr.length - 1];
}

console.log(returnLastItem(myArray)); // 15


//Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].

let myArray2 = [1,3,6];
let arr = [];

function returnNewArray(arr) {
	arr = myArray2.concat(myArray2);
   return arr;
}

console.log(returnNewArray(arr)); // [1, 3, 6, 1, 3, 6]


//Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.

function number(n) {
    let res = [];
    for(i = 1; i <= n; i++)
        res.push(i);
    return res;
}

console.log(number(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



//Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"

let arr1 = [1, 2, 3]; 
let arr2 = ["x", "y", "z"];

function getAll(arr1,arr2) {
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].shift();
    result.push(arguments[i]);
  }
  return result;
}

console.log(getAll(arr1,arr2)); // [[2, 3], ["y", "z"]]



//Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").

let str = "екважбигёзд";

function alphabetize(str) {
  
  return str.split('').sort(alphabetSort).reverse().join('');
}

function alphabetSort(a, b) {
  let aCode = a.toLowerCase().replace('ё','е'+ String.fromCharCode(1110));
  let bCode = b.toLowerCase().replace('ё','е'+ String.fromCharCode(1110));
  if (aCode > bCode)
    return 1;
  if (aCode < bCode)
    return -1;
  else
    return 0;
}

console.log(alphabetize(str)); // "кизжёедгвба"




//Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.

let myArray = [5, 2, -1, 6, 9, -9, 3];

myArray.sort((a, b) => b - a);

console.log(myArray); // [9, 6, 5, 3, 2, -1, -9]

//Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный номер элемента в массиве конечный номер

let array = [];
let elementFirst;
let elementLast;
function getThreeArgs(array, elementFirst, elementLast) {

 }



//Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.

let elementFirst = 1;
let elementLast = 4;
let array = ['a', 'б', 'в', 'г', 'д', 'е', 1, 3];
function getThreeArgs(array, elementFirst, elementLast) {

return array.slice(elementFirst,elementLast);
 }

console.log(getThreeArgs(array, elementFirst, elementLast)); // ["б", "в", "г"]


//Удвоить элементы массива, не используя циклы.,

const numbers = [2, 4, 6, 8];
const doubledNumbers = numbers.map(function(n) {return n*2;});

console.log(doubledNumbers); // [4, 8, 12, 16]

//Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.

let arr =  [1, 2, 3, 4, 5];
arr.splice(2, 2);


//Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.

let arr =  [1, 2, 3, 4, 5];
arr.splice(2, 2, 3, 4);

console.log(arr); // [1, 2, 5]


//Вставить в произвольный массив любое значение после второго элемента.

let arr =  [1, 2, 3, 4, 5];
arr.splice(2, 0, 10);

console.log(arr); // [1, 2, 10, 3, 4, 5]


//Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массив"

const arr2 = [[3, 2], [1], [4, 5, 6]];
arr2.sort();

const newArray = arr2.slice();

console.log(newArray); // [[1], [3, 2], [4, 5, 6]]


//Отсортировать массив объектов по возрастающему количеству ног животных: 

let arrObjects = [{kind: "tarantula", info: {legs: 8, eyes: 8}}, 
                  {kind: "french bulldog", info: {legs: 4, eyes: 2}}, 
                  {kind: "human", info: {legs: 2, eyes: 2}}, 
                  {kind: "lobster", info: {legs: 10, eyes: 2}}];

arrObjects.sort(function(a, b) {
  if(a.info.legs > b.info.legs) {
    return 1;
  } else if(a.info.legs < b.info.legs) {
    return -1
  } else {
    return 0
  }
});
                  
console.log(arrObjects); // [{info: {eyes: 2, legs: 2}, kind: "human"}, {info: {eyes: 2, legs: 4}, kind: "french bulldog"}, {info: {eyes: 8, legs: 8}, kind: "tarantula"}, {info: {eyes: 2, legs: 10}, kind: "lobster"}]                  




//Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ] Например, filterServices(services, 20, 60).

const services = [{service: "service1", executionTime: 56}, 
                  {service: "service2", executionTime: 97}, 
                  {service: "service3", executionTime: 23}, 
                  {service: "service4", executionTime: 65}, 
                  {service: "service5", executionTime: 2}, 
                  {service: "service6", executionTime: 73}, 
                  {service: "service7", executionTime: 82}, 
                  {service: "service8", executionTime: 19}, 
                  {service: "service9", executionTime: 33}, 
                  {service: "service10", executionTime: 42}];


services.sort(function(a, b) {
  if(a.executionTime > b.executionTime) {
    return 1;
  } else if(a.executionTime < b.executionTime) {
    return -1;
  } else {
    return 0;
  }
});
 
let newServices = services.slice();
 
function isBigEnough(newServices) {
 return newServices.executionTime > 20 && newServices.executionTime < 60;
}
 

let filtered = newServices.filter(isBigEnough);

console.log(filtered); 

/*[{
  executionTime: 23,
  service: "service3"
}, {
  executionTime: 33,
  service: "service9"
}, {
  executionTime: 42,
  service: "service10"
}, {
  executionTime: 56,
  service: "service1"
}]*/