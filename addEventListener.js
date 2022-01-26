const buttonOne = document.querySelector('.btn');
console.log(buttonOne)
buttonOne.addEventListener('click', (function (){
    console.log('Жми дурень')
}))
const buttonTwo = document.querySelector('button');
console.log(buttonTwo)
const buttonFre = document.getElementsByTagName('section');
console.log(buttonFre)
const buttonFoo = document.getElementById('1');
console.log(buttonFoo)
const clickButtonFoo = () => {
    return console.log('Кликай на меня долго');
}
buttonFoo.addEventListener('click',(clickButtonFoo));

const buttonAll = document.querySelectorAll('.btn');
console.log(buttonAll)
const clickButtonSex = () => {
    return console.log('Кликай на меня долго');
}
buttonAll.forEach((button) => {button.addEventListener('click',(clickButtonSex))});
