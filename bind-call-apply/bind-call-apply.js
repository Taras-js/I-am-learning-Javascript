
const bindFunction = {
    type: 0.2,
    name: 'Taras',
    calculate (total) {
        console.log(this)
        return total + total*this.type;
    },
    detail (dish1, dish2, sum) {
    return `Цена вашего обеда включая ${dish1} и ${dish2} составляет ${this.calculate(sum)} рублей`
    }
};
const lunchPrice = bindFunction.calculate.bind(bindFunction);
const fullLunchPrice = bindFunction.detail.bind(bindFunction)
console.log(lunchPrice(10000))
console.log(fullLunchPrice('суп', 'каша', 15000))
const $ = document.querySelector.bind(document);
const header = $('h1');

console.log(header)
const lunchPrice = bindFunction.detail.call(bindFunction,'пиво', 'водка', 20000);
const applyLunchPrice = bindFunction.detail.apply(bindFunction, ['pivo', 'vodka', 45000])
console.log(lunchPrice)
console.log(applyLunchPrice)