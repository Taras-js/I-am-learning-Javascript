let a = 28;
let b = a;
b = 12;
let c = b.toString();
let f = c.split();
console.log({a, b, c, f})
let obj = {
    name: 'Taras',
    age: 41,
    social: {
        scype: true,
        twitter: false,
        internet: {
            provider: 'Dom.ru'}
    }
}
const obj5 = Object.assign({}, obj, {})
const obj6 = JSON.stringify(obj5)

const obj4 = JSON.parse(JSON.stringify(obj));

obj4.social.internet.provider = 'Telecom';
const obj2 = {...obj};
obj2.age = 18;
const obj3 = Object.assign({}, obj, {name: 'Sacha'});
console.log({obj5, obj6})


const array = ['mazda', 'datsun', 'volga', 'nissan', {brand: 'lexus', year: 2022, gasTanc: 100}];
const array2 = [...array];
array2[3] = 'pejo';
const array3 = array.slice(0);
array3.push('t-90');
array3.pop();
array3.shift();
array3.unshift('taras');
const array4 = [].concat(array);
array4.reverse();
const array5 = array.concat(array4);
const array6 = array5.splice(0);
const array7 = Array.from(array6);
const array8 = array7.reverse().toString();
console.log({array, array2, array3, array4, array5, array6, array7, array8})
