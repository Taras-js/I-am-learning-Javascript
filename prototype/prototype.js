const addTime = document.querySelector(".header");
// Функция возвращает местное время в формате час - минута - секунда = обновляется 1 раз в секунду
setInterval(() => {
    addTime.innerHTML = getClock();
}, 1000)
const getClock = () => {
    const clock = new Date();
    const hours = clock.getHours();
    const minutes = clock.getMinutes();
    const seconds = clock.getSeconds()
    return `<div>Местное время ${hours} часов ${minutes} минут ${seconds} секунд</div>`

}

const driveAuto = document.querySelector('.auto')

function Auto(brand, color, gas, gasTank) {
    this.brand = brand;
    this.color = color;
    this.gas = gas;

}

Auto.prototype.drive = function () {
    if (this.gas > 0) {
        this.gas = this.gas - 50;
        return driveAuto.textContent = `В вашем баке ${this.gas} литров бензина`;
    } else {
        return driveAuto.innerHTML = `<div>Бензин закончился - ты лошара, вызывай эвакуатор</div>`;
    }

}
Auto.prototype.gasTank = function () {
    if (this.gas >= 50) {
        this.gas2 = 50;
        return driveAuto.textContent = `Вы заправили в бак ${this.gas2} литров бензина`
    } else if (this.gas >= 0) {

        return driveAuto.textContent = `Вы заправили в бак 100 литров бензина`
    }

}
const hyndai = new Auto("хундай", "красный", 100);
const zapor = new Auto("запорожец", "невиданный", 100);

