// const listPromise = fetch('https://api.sampleapis.com/countries/countries')
// console.log(listPromise)
// listPromise
//     .then(data => data.json())
//     .then(countries => console.log(countries))
//     .catch(err => {
//     console.log('Ошибкa', err)})
// const coffee = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve ('Ваш кофе готов')
//             reject (Error('Вы допустили ошибку'))})
// });
// coffee.then(data => console.log(data)).catch(err => console.log(err));
//
//
// const family = [
//     {member: 'mother', id: 111, coffee: 'Latte'},
//     {member: 'father', id: 222, coffee: 'Espresso'},
//     {member: 'son', id: 333, coffee: 'Cappuccino'},
// ]
// const getCoffee = (member) => {
//     const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
//     return coffeePromise
//         .then(data => data.json())
//         .then(list => {
//             const coffee = list.find(res => res.title === member.coffee)
//
//             return {
//                 ...member,
//                 coffee
//             }
//         })
// }
// const getFamilyMember = (id) => {
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//             const member = family.find(res => res.id === id);
//
//             if(member) {
//                 resolve(member);
//             } else {
//                 reject(Error('Такого человека в семье не существует'))
//             }}, 3000)
//
//     })
// }
// getFamilyMember(333)
//     .then(data =>  getCoffee(data))
//     .then(newMember => console.log(newMember))
// .catch(err => {
//     console.log(err)
// })
//
// const breakKaffee = () => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Ваш кофе готов')
//         }, 500)
//     })
// };
// const breakToast = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Ваши тосты готовы')
//         }, 2500)
//     })
// };
// const caffePromise = breakKaffee();
// const toastPromise = breakToast();
// caffePromise.then(data =>{
//     console.log(data)
// });
// toastPromise.then(data =>{
//     console.log(data)
// });
// Promise.all([caffePromise, toastPromise])
//     .then(([caffePromise, toastPromise]) =>
//         console.log([caffePromise, toastPromise]))

const countryPromise = fetch('https://api.sampleapis.com/countries/countries');
const caffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
// Promise.all([caffeePromise, countryPromise])
//     .then(data => {
//         return Promise.all(data.map(res => res.json()))
//     }).then(finalData =>{
//         console.log(finalData)
// })
// countryPromise
// .then(data => data.json())
// .then(data => {
//     console.log(data)
// })
caffeePromise
    .then(data => data.json())
    .then(data => console.table(data))
