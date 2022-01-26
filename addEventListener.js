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
const clickButtonSex = function (event)  {
    console.log('Кликай на меня долго');
    console.log(event.target.dataset)
    console.log(event.target)
    console.log(event.currentTarget)
    console.log (event.target === event.currentTarget)
    // event.stopPropagation()
    console.log(this)
}
// buttonAll.forEach((button) => {button.addEventListener('click',(clickButtonSex))});
buttonAll.forEach(b => b.addEventListener('click',clickButtonSex));
window.addEventListener('click', ((event)=>{
    console.log('Window click', event.target)
    event.stopPropagation()

}), {capture: true});