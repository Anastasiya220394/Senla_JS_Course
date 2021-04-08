document.addEventListener('DOMContentLoaded', function () {
    console.clear();
    // ваш код поместить тут
    
    //Создать функцию которая принимает два. Функция проверяет является ли первый элемент родителям для второго элемента isParent(parent, child) => true || false

let parent = document.body.children[3];

let child = document.querySelector('div');

function isParent(parent, child) {

  if (parent.contains(child)) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isParent(parent, child);


//Найти элемент который находится перед списком ul

let elemUl = document.querySelector('ul');
let beforeElem = elemUl.previousElementSibling;
console.log(beforeElem);

//Найти параграф и получить его текстовые содержимое

let elemP = document.querySelector('p');
console.log(elemP.innerHTML);

//Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.

let elem = document.querySelector('body');

function getInfo(elem) {
let object = {
type : elem.nodeType,
name : elem.nodeName,
nodes : elem.children.length
};
return object;
}

console.log(getInfo(elem)); /* Object
                                 name: "BODY"
                                 nodes: 4
                                 type: 1
                                 __proto__: Object*/


//Найти список и добавить ему класс "list"

let el = document.querySelector('ul');
el.className += 'new_class';

  });