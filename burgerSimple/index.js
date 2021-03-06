

/*

  Задание:

    1. Создать конструктор бургеров на классах, которая добавляет наш бургер в массив меню

    Дожно выглядеть так:
    new burger('Hamburger',[ ...Массив с ингредиентами ] , 20);

    Моделька для бургера:
    {
      cookingTime: 0,     // Время на готовку
      showComposition: function(){
        let {composition, name} = this;
        let compositionLength = composition.length;
        console.log(compositionLength);
        if( compositionLength !== 0){
          composition.map( function( item ){
              console.log( 'Состав бургера', name, item );
          })
        }
      }
    }

    Результатом конструктора нужно вывести массив меню c добавленными элементами.
    // menu: [ {name: "", composition: [], cookingTime:""},  {name: "", composition: [], cookingTime:""}]

      2. Создать конструктор заказов

      Моделька:
      {
        id: "",
        orderNumber: "",
        orderBurder: "",
        orderException: "",
        orderAvailability: ""
      }

        Заказ может быть 3х типов:
          1. В котором указано название бургера
            new Order('Hamburger'); -> Order 1. Бургер Hamburger, будет готов через 10 минут.
          2. В котором указано что должно быть в бургере, ищете в массиве Menu подходящий вариант
            new Order('', 'has', 'Название ингредиента') -> Order 2. Бургер Чизбургер, с сыром, будет готов через 5 минут.
          3. В котором указано чего не должно быть
            new Order('', 'except', 'Название ингредиента') ->


          Каждый их которых должен вернуть статус:
          "Заказ 1: Бургер ${Название}, будет готов через ${Время}

          Если бургера по условиям заказа не найдено предлагать случайный бургер из меню:
            new Order('', 'except', 'Булка') -> К сожалению, такого бургера у нас нет, можете попробовать "Чизбургер"
            Можно например спрашивать через Confirm подходит ли такой вариант, если да - оформлять заказ
            Если нет, предложить еще вариант из меню.

      3. Протестировать программу.
        1. Вначале добавляем наши бургеры в меню (3-4 шт);
        2. Проверяем работу прототипного наследования вызывая метод showComposition на обьект бургера с меню
        3. Формируем 3 заказа

      + Бонусные задания:
      4. Добавлять в исключения\пожелания можно несколько ингредиентов

*/

const Ingredients = [
    'Булка',
    'Огурчик',
    'Котлетка',
    'Бекон',
    'Рыбная котлета',
    'Соус карри',
    'Кисло-сладкий соус',
    'Помидорка',
    'Маслины',
    'Острый перец',
    'Капуста',
    'Кунжут',
    'Сыр Чеддер',
    'Сыр Виолла',
    'Сыр Гауда',
    'Майонез'
];

let OurMenu = [];
let OurOrders = [];

class Burger {

    constructor(name, ingredients, cookingTime) {
        this.name = name
        this.composition = ingredients
        this.cookingTime = cookingTime
        this.showComposition= function(){
            let {composition, name} = this;
            let compositionLength = composition.length;
            console.log(compositionLength);
            if( compositionLength !== 0){
                composition.map( function( item ){
                    console.log( 'Состав бургера', name, item );
                })
            }
        }
    }
}

let Cheeseburger = new Burger("Cheeseburger", ["Булка", "Огурец", "Бекон"], 20)
OurMenu.push(Cheeseburger);
console.log(OurMenu)

class Order{

    constructor(name, condition, value) {
        this.id = ""
        this.orderNumber = ""
        this.orderBurger = name
        this.orderException = value
        this.orderAvailability = ""
    }
}
