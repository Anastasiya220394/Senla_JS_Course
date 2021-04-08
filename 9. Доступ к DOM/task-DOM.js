//Получить и вывести в консоль:
//head
console.log( document.head );

//body
console.log( document.body );

//все дочерние элементы body
console.log( 'дочерние элементы body:', document.body.children );

//4. первый div и все его дочерние узлы 

console.log( 'первый div:', document.querySelector('div') );

//4.1 вывести все дочерние узлы в консоль 

let divFirst = document.querySelector('div');

console.log( 'все дочерние узлы:', divFirst.children );


//4.2 вывести все дочерние узлы в консоль кроме первого

let children = divFirst.children;

for (let i = 1; i < children.length; i++) {
    console.log( children[i] );
}