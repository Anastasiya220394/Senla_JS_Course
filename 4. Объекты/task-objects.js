//Создать объект с полем 'notebook' равным 'MacBook'
let object = {
    notebook: 'MacBook'
};


//Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равная 'dollar'
object.price = 1500;
object.currensy = 'dollar';



//Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами)
object.details = {
    model: 'Air',
    color: 'Rose gold'
}

console.log(object); /*{
    currensy: "dollar",
    details: {
      color: "Rose gold",
      model: "Air"
    },
    notebook: "MacBook",
    price: 1500
  }*/