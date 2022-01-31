
const cars = {
    brand: 'bmw',
    // color: 'red',
    specified: {
        kpp: 'auto',
        speedMax: '180',
    }
};
const car = document.querySelector('.car')
function addCars () {
        const auto = [cars]
    auto?.forEach(car => {
        console.log( ` Машина ${car?.brand} 
            Цвет ${car?.color} 
            // Спецификация коробки переключения передач ${car.specified?.kpp} 
`)
    })

}
addCars()