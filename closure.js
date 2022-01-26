
const externalFunction = function (name){
    const externalLet = `${name} - Я Большая пребольшая функция попробуй замкни меня :)`;

     function internalFunction() {
        const internalLet = `${name} - Я маленькая премаленькая функция попробуй найди меня`;
        console.log('BigFunction >', externalLet);
        console.log('LittleFunction >', internalLet);
    }
    return internalFunction;

}

    const callInternalFunction = externalFunction('Taras');
    callInternalFunction();

function helloPlayers (name) {
    const lastName = `Bay ${name}`;

    function hello () {
       const firstName = `Hello ${name} `;
        alert(firstName);
        alert(lastName);
    }
        return hello;

}
const hey = helloPlayers('Taras');
hey();

function nameDurak (name) {
    let durak = ', извините, но Вы дурак';
   return function () {

        return `${name + durak} `;
    }
}
const newDurak = nameDurak('Taras Vasilievich');
newDurak();

function stepCounter (firstName) {
    let start = 0;
    return function () {
        start++;
        return `${firstName} сделал ${start} шагов`;
    }
}
const playerTwo = stepCounter('Taras');
const playerFoo = stepCounter('Sacha');
playerFoo();
playerTwo();