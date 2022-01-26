
const externalFunction = function (name){
    const externalLet = `${name} - Я Большая пребольшая функция попробуй замкни меня :)`;

    const internalFunction = function () {
        const internalLet = `${name} - Я маленькая премаленькая функция попробуй найди меня`;
        console.log('BigFunction >', externalLet);
        console.log('LittleFunction >', internalLet);
    }
    return internalFunction;

}

    const callInternalFunction = externalFunction('Taras');
    callInternalFunction()
