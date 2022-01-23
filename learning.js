// const myHeading = document.querySelector('h1');
// let myVariable = 'Taras';
// myHeading.textContent = 'Hello world!';
// var myVariable; // менее рекомендуется, переменная - контейнер в котором хранятся значения
// let oneVariable; // более рекомендуется, переменная - контейнер в котором хранятся значения
; // указывает где заканчивается оператор, в основном требуется когда нужно разделить операторы
// на одной строке, но считается правилом хорошего тона у некоторых программистов
// myVariable = 'Taras'; // и так
// myVariable = 'Taras'; // и так привается значение value
// myVariable; // Мы получаем значение вызывая имя перменной
// console.log(myVariable)
// myVariable = 'Red';
// console.log(myVariable)
// const myHeading = document.querySelector('h1');
// let myVariable = 'Taras';
// myHeading.textContent = `'Hello world!' ${myVariable}`; //здесь я решил поиграться со знаниями с прошлого курса - всплыли в голове
// Все в JS является объектом и может храниться в перменной: строка, число, булевы значения, массивы, объекты
/* Если комментарий в несколько 
строк с разрывом то делаем так 
в дургом случае как в примерах закоментированных сверху
*/
// Операторы 
/* + оператор добавления или сложения  -* / вычитание, умножение и деление*/
// let number1 = 6;
// let number2 = 8;
// let sumNumbers = number2+number1;
// console.log(sumNumbers);
// let variantSames = 15 - 12;
// console.log(variantSames);
// let variant2 = 4;
// let logic = variantSames!==variant2;
// console.log (logic);
// let variantSames = 15 - 12;
// let variant2 = 4;
// let logic = variantSames===variant2;
// console.log (logic);//  сравнение выводит false
// let variantTrue = 6;
// let variant2 = !(variantTrue === 6);// сравнение выводит false
// console.log(variant2);
// let gridGad = 'пиво';
// if (gridGad === 'пиво') {
//     alert('Hello');
// }
// else {
//     alert ('Bai');
// }

// function allSam (number1, number2) {
//    var result = number1*number2;
//    return result;
// }
// alert (allSam(7,9));
//
// document.querySelector('html').onclick = function paragraf() {
//    alert('Gut')
// }
// var myImage = document.querySelector('img');
//
// myImage.onclick = function() {
//    var mySrc = myImage.getAttribute('src');
//    if(mySrc === 'Img/homepage.jpg') {
//       myImage.setAttribute ('src','Img/background_my_plans.jpg');
//    } else {
//       myImage.setAttribute ('src','Img/homepage.jpg');
//    }
// }
// let newClassAll = document.querySelector('p');
// newClassAll.onclick = function (){
//     let newClass = newClassAll.getAttribute('class');
//     if(newClass === 'intro-text') {
//         newClassAll.setAttribute('class','nitro-text');
//     }
//     else{
//         newClassAll.setAttribute('class','intro-text');
//     }
// }
// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('a');
// function setUserName() {
//     var myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
// }
// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     var storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }
// myButton.onclick = function() {
//     setUserName();
// }
// Шесть типов данных,  которые являются примитивами:
//     Boolean. true и false.
//     null. Специальное ключевое слово, обозначающее нулевое или «пустое» значение. Поскольку JavaScript чувствителен
// к регистру, null не то же самое, что Null, NULL или любой другой вариант.
//     undefined. Свойство глобального объекта; переменная, не имеющая присвоенного значения, обладает типом undefined.
//     Number. 42 или 3.14159.
//     String. "Howdy".
//     Symbol (ECMAScript 6)
//     и Object
// x = "The answer is " + 42 // "The answer is 42"
// y = 42 + " is the answer" // "42 is the answer"
// "37" - 7 // 30
// "37" + 7 // "377"
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
//
// console.log(getRandomInt(1000));
// // expected output: 0, 1 or 2
// function getRandomNumber (max) {
//  return Math.floor(Math.random() * max)
// }
// console.log(getRandomNumber(100))
//var number = 10;
//var number = 22;
//console.log(number)
// их можно обновлять и и х можно повторно объявлять
// область видимость в функции либо глобальный объект window
// var за пределы функции не выходит
// let and const  область видимости блок а var функция
// let and const объявляются только один раз
// let можно обновлять а const нельзя
//Object.freeze(car) не дает возможности изменять объект
// const fruits = ['apple', 'ssssss', 'sdddddd'];
// const freshFruits = fruits.map(function (fruit){
//     return `Fresh ${fruit}`;
// })
// console.log(freshFruits)
// const freshFruits = fruits.map(fruits => {
//          return `Super ${fruits}`
// })
// const arrowGater = fruits.map(fruits => `Giper ${fruits}`);
// console.log(arrowGater)
// this  в стрелочной функции использует родительские свойства
// стрелочная функция не создает собственный контекст а использует внешний контекст

// const ulHeader = document.querySelector('.color')
//
// ulHeader.addEventListener('click', function (){
//     this.style.color = 'red';
//     setTimeout(() => {
//         this.style.color = 'green';
//     }, 3000)
// })
// console.log(ulHeader);

// const liHeader = document.querySelector('.color');
//
// liHeader.addEventListener('click', function (){
//     this.style.color = 'red';
//     // this.style.borderColor = 'green';
//     // this.style.textTransform = 'lowerCase';
//     // this.style.textTransform = 'upperCase';
//     this.style.fontSize = '35pt';
// })
// console.log(liHeader)
// Шаблонные строки
// const car = {
//     name: 'Tesla',
//     year: 2012
// }
// const details = `Автомобиль ${car.name} выпущен с завода в ${car.year} году`;
// console.log(details)
// const newHtml = `<div>${car.name}</div> <div>${car.year}</div>`;
// document.body.innerHTML= newHtml;
// console.log(newHtml)
// const cars = [
//     {   name: 'Tesla',
//         year: 2019
//     },
//     {   name: 'Lada',
//         year: 2010
//     },
//     {   name: 'Lada',
//         year: 2010
//     },
//     {   name: 'Lada',
//         year: 2010
//     },
//     {   name: 'Lada',
//         year: 2010
//     }
// ]
// const htmlNew = `
// <ul>
// ${cars.map(car => `<li>${car.name}</li>`).join(' ')}
// </ul>
// `;
// console.log(htmlNew)
// document.body.innerHTML = htmlNew;
// const car = {
//     // name: 'Tesla',
//     // year: 2012,
//     info: ['electric', 'modern', 'functional']
// };
// const infoAdd = (infos) => {
//    return`
// <div>
//     ${infos.map(info => `<div>${info}</div>`).join(' ')}
// </div>
// `;
//
// }
// const newHtml = `
// <ul>
// ${car.name ? `<p>${car.name}</p>` : ''}
//
// ${car.year ? `<p>${car.year}</p>`: ''}
// <p>${infoAdd(car.info)}</p>
//
//
// </ul>
//
// `;
// console.log(newHtml)
// document.body.innerHTML = newHtml;