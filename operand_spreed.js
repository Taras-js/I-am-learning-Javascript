const auto = ['Москвич', 'Волга', 'Жигули', 'Нива', 'Урал'];

const newAuto = [...auto];
newAuto.push('Тойота');// Добавляет элемент в конец массива
newAuto.pop();// Удаляет последний элемент массива
newAuto.shift();// Удаляет первый элемент массива
newAuto.unshift('Mazda');//Добавляет первый элемент массива
console.log(auto)
console.log(newAuto)
const cars = newAuto.concat([...auto]);
cars.pop()
console.log(cars)
const redAuto = [...auto, 'Volvo', ...newAuto, ...cars];
console.log(redAuto)
let stringReverse = 'Taras';
const reverse = stringReverse.split('', 5);
console.log({reverse})

const reverseArray = reverse.reverse();
console.log(reverseArray)

const joinArray = reverseArray.join('');
console.log(joinArray)
const toLowerCase = joinArray.toLowerCase()
console.log(toLowerCase)
const str = 'Парашутист';
const reverseStr = str.split('').reverse().join('').toLowerCase();
console.log(reverseStr)

function reverseWord(str) {
    return str.split('').reverse().join('').toLowerCase();// Данная функция преобразует строку в массив символов,
    // преворачивает массив, а затем преобразует его в строку и убирает верхний регистр;
}

console.log(reverseWord('Перехватчики'))
