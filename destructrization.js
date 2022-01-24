// Деструктуризация ES6
let green = 'green';
let red = 'red';
[green, red] = [red, green];
console.log({green, red})
const car = {
    name: 'Tesla',
    year: 2012,
    info: ['electric', 'modern', 'functional'],
    date: {
        width: '100mm',
        length: '200mm'

    }
};
const {name, year, info} = car;
console.log({name, year, info})
const {width: newWidth, length} = car.date;
console.log({newWidth, length})
const car = {
    name: 'Tesla',
    year: 2020,
    info: ['electric', 'modern', 'functional'],
    date: {
        width: '100mm',
        length: '200mm'

    }
};
const {name, year = 'не известен'} = car;
console.log({name, year})
const cars = ['Nissan', 'automat', '2012', 'red'];
const [marka, kpp, year, color] = cars;
console.log({marka, kpp, year, color})
const autoCar = 'Москвич, 1920 года, убитый в хлам, ездил дедушка, 100лет';
const [brand, year, state, ...client] = autoCar.split(',');
console.log({brand, year, state, client})
const [owner, store] = client;
console.log(owner, store)

function converterRubles(rubles) {
    const currency = {
        EUR: rubles / 85,
        USD: rubles / 74,
        GBP: rubles / 105
    }
    return currency;
}

const {EUR, USD, GBP} = converterRubles(10000);
console.log({EUR, USD, GBP})

function getTotal({total = 2000, delivery = 0.1} = {}) {
    return total + total * delivery;
}

const total = getTotal({total: 5000, delivery: 0.2});
console.log(total)