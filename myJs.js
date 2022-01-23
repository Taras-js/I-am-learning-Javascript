//const arrayStudents = ['Taras', 'Sacha', 'Maxim'];
//console.log(arrayStudents)
//console.log(arrayStudents[2])
//arrayStudents.push('sssss') //добавить в конец
//console.log(arrayStudents)
//arrayStudents.shift('Taras') //удалить в начале
//console.log(arrayStudents)
//arrayStudents.unshift('Taras', 'macha') //добавить в начало
//console.log(arrayStudents)
//arrayStudents.pop()// удаляет элемент в конце
//console.log(arrayStudents)
//const helloStudents = arrayStudents.map(function( student){
 //   console.log('студент =', student)
//    return `Welcome ${student}`;
//})// перебирает все элементы массива
    //console.log(helloStudents)
// function declarationAdd  (num1, num2)  {
//     let some = num1 + num2;
//     return some;
// }
// console.log(declarationAdd(5,4))
// let exprezionAdd = function (num1, num2) {
//     return num2 - num1;
// }
// console.log(exprezionAdd(5,4))
//
//
// #JS Шпаргалка
//
// 3 способа создать копию объекта в JS
//
// const car = { model: 'Tesla', year: 2022 }
//
// 1) Использовать оператор Spread
//
// const car2 = { ...car }
//
// 2) Использовать Object.assign()
//
// const car3 = Object.assign({}, car)
//
//
// Если исходный объект содержит вложенный объект,
//     то первые два способа не сработают для вложенного объекта.
//
// 3) Здесь нам поможет JSON.parse/JSON.stringify
//
// const car4 = JSON.parse(JSON.stringify(car))

// 1. Переменные
// Дополнительное видео:
// Общая информация: https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables
// Const: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const
// Let: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let

// 2. Типы данных
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures

// 3. Сравнения
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness

// 4. Условия if..else
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else

// 5. Функции
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions

// 6. Массивы
// https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Arrays

// 7. Объекты
// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects

// 8. Циклы
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration

// 9. Dom (Document Object Model) дерево
// https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model

// 10. События
// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/Events

// 11. Асинхронность
// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous


// Условия
if (10 > 5) {
    console.log('Yes');
} else if (20 > 15) {
    console.log('Yes 2');
} else if (50 < 60) {
    console.log('Yes 3');
}

// Функции
function calculateTotal(num1, num2) {
    return num1 + num2;
}

calculateTotal(10, 3);

// Объекты
const car = {
    model: 'Tesla',
    year: 2022,
    color: 'silver',
    options: ['sport seats', 'diesel'],
    atStock: true,
    engine: {
        type: 'v8',
        turbo: true
    }
}

// Массивы
const products = ['сыр', 'грибы', 'ветчина', 'помидор'];
products.push('морковь');

// Циклы
const products = ['сыр', 'грибы', 'ветчина', 'помидор'];

function logIngredients(ingredient, index) {
    if (index === (products.length -1)) {
        console.log(ingredient, index);
    }

}

products.forEach(logIngredients);
// map filter reduce

// DOM Тэг H2
const h2 = document.querySelector('.wrapper h2');
h2.textContent = 'Dom Tree';
h2.style.color = 'blue';

// DOM Изображение
const myPic = document.querySelector('.myPic');
myPic.addEventListener('click', function() {
    myPic.classList.toggle('circle');
})

// Асинхронность
function makeBurger() {
    const burgerPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            // Бургер готов
            resolve('Ваш бургер готов!')
        }, 2000)

    });
    return burgerPromise;
}

const burger = makeBurger();
const burger2 = makeBurger();
console.log(burger)

burger.then(function(myBurger) {
    console.log('my burger 1> ', myBurger)
})
burger2.then(function(myBurger) {
    console.log('my burger 2> ', myBurger)
})