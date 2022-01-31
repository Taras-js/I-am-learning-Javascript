//
// const cars = ['tesla', 'dodj', 'bmw', 'ford', 'sitroen', 'subaru'];
//
// for(let i = 0; i < cars.length; i++ ){
//     console.log(i)
//     console.log(cars[i])
// }
// cars.forEach(car => console.log(car))// не возвращает значения. нельзя использовать внутри break and continue
//
// for (let index in cars) {
//     // if(index === '3'){
//     //     break
//     // }
//     if(index === '3'){
//         continue
//     }
//     console.log(cars[index])
// }
// // если библиотека или сотрудник вмешается в прототип Array и добавит новый
// // то for in пробежится по всем методам вновь созданным
// for (let car of cars) {
//     // if (car === 'bmw') {
//     //   break
//     //
//     // }
//     if (car === 'ford') {
//         continue
//     }
//     console.log(car)
// }

const motor = {
    name: 'subaru',
    year: 2021,
    massa: '50кг',
}
// for (let i of Object.keys(motor)) {
//     console.log(i)
// } //Получаем ключи
for (let i of Object.values(motor)) {
    console.log(i)// Получаем значение ключей
}