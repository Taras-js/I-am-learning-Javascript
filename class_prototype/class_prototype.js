function Cars3(brand, color) {
    this.brand = brand;
    this.color = color;
}

const car = new Cars3('Range Rover', 'black');
const car2 = new Cars3('Nissan', 'white');
// console.log(car, car2)
Cars3.prototype.start = function () {
    console.log(`${this.brand} стартовать`)
};
const Cars2 = class {
    //  вариант синтаксиса класса

}

class Cars {
    constructor(brand, color, speed) {
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }

    start() {
        console.log(`Спорткар ${this.brand}, ${this.color} цвета, стартует со скоростью ${this.speed} километров в час`)
    }

    stop() {
        console.log(`Дришпак ${this.brand}, ${this.color} цвета, развалился на части после финиша со скоростью 
        ${this.speed} миллиметров в час`)
    }

    static format() {
        return console.log('Наши танки самые быстрые танки в мире')

    }

    set rating(value) {
        this.upper = value.toUpperCase();
    }

    get rating() {
        return this.upper;
    }
}

const moskvich = new Cars('Москвич', 'orange', 250);
const zapor = new Cars('Запорожец горбатый', 'невиданного', 1000);
