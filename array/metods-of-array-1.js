// map, reduce, sort, filter, forEach
// ## Работа с массивами данных

// Наши данные

const presidents = [
    {first: 'George', last: 'Washington', born: 1732, died: 1799},
    {first: 'John', last: 'Adams', born: 1735, died: 1826},
    {first: 'Ronald', last: 'Reagan', born: 1911, died: 2004},
    {first: 'Gerald', last: 'Ford', born: 1913, died: 2006},
    {first: 'Richard', last: 'Nixon', born: 1913, died: 1994},
    {first: 'John F.', last: 'Kennedy', born: 1917, died: 1963},
    {first: 'Harry S.', last: 'Truman', born: 1884, died: 1972},
    {first: 'Grover', last: 'Cleveland', born: 1837, died: 1908},
    {first: 'Chester A.', last: 'Arthur', born: 1829, died: 1886},
    {first: 'Abraham', last: 'Lincoln', born: 1809, died: 1865},
    {first: 'Franklin', last: 'Pierce', born: 1804, died: 1869},
    {first: 'Lyndon B.', last: 'Johnson', born: 1908, died: 1973},
    {first: 'Dwight D.', last: 'Eisenhower', born: 1890, died: 1969},
];


const writers = ['Василий, Жуковский', 'Александр, Грибоедов', 'Александр, Пушкин', 'Владимир, Даль',
    'Николай, Языков', 'Федор, Тютчев', 'Николай, Гоголь', 'Алексей, Кольцов', 'Александр, Герцен',
    'Иван, Гончаров', 'Михаил, Лермонтов', 'Пётр, Ершов', 'Алексей, Толстой', 'Даниил, Заточник',
    'Александр, Радищев', 'Евгений, Баратынский', 'Петр, Вяземский', 'Александр, Бестужев-Марлинский',
    'Михаил, Загоскин', 'Сергей, Аксаков', 'Владимир, Одоевский', 'Григорий, Данилевский',
    'Алексей, Писемский', 'Дмитрий, Григорович', 'Яков, Полонский', 'Леонид, Андреев',
    'Валерий, Брюсов', 'Саша, Черный', 'Юрий, Трифонов', 'Федор, Абрамов',
    'Дмитрий, Кедрин', 'Василий, Шукшин'];


// Array.prototype.filter()
// 1. Отфильтровать президентов которые родились в 1700-х годах.
// const born1700 = presidents.filter(president => {
//      if(president.born >= 1700 && president.born < 1800) {
//          return president = true;
//      }
//  });
const born1700 = presidents.filter(president => president.born >= 1700 && president.born < 1800);
// console.table(born1700)
const born1800 = presidents.filter(president => president.born >= 1800 && president.born < 1900);
// console.table(born1800)

// Array.prototype.map()
// 2. Создать массив, который содержит только имя и фамилию каждого президента
const fullName = presidents.map(president => {
    return `${president.first} ${president.last}`
})
// console.table(fullName)
const diedPresidents = presidents.map(president => `${president.last} умер в ${president.died} году`);
// console.table(diedPresidents)
// Array.prototype.sort()
// 3. Отсортировать президентов по году рождения - от старшего к младшему
const sortPresidents = presidents.sort((a, b) => {
    if (a.born > b.born) {
        return 1;
    } else {
        return -1;
    }
})
// console.table(sortPresidents)
const junior = presidents.sort((a, b) => {
    if (a.born < b.born) {
        return 1;
    } else {
        return -1;
    }
})
// console.table(junior)
const died = presidents.sort((a, b) => {
    if (a.died > b.died) {
        return 1;
    } else {
        return -1;
    }
})
const died1 = presidents.sort((a, b) => (a.died > b.died) ? 1 : -1);
// console.table(died1)
const died2 = presidents.sort((a, b) => (a.died < b.died) ? 1 : -1);
// console.table(died2)
// Array.prototype.reduce()
// 4. Подсчитать общее количество лет жизни всех президентов
const presidentsAll = presidents.reduce((total, president) => {
    return total + (president.died - president.born);
}, 0)
// console.log(presidentsAll)
const presidentSort = presidents.reduce((total, president) => total + (president.died - president.born), 0);
// console.log(presidentSort)


// 5. Отсортировать президентов в зависимости от количества прожитых лет (от большего к меньшему)
const presidentsSorted = presidents.sort((a, b) => {
    const presidentA = a.died - a.born;
    const presidentB = b.died - b.born;
    if (presidentA > presidentB) {
        return -1;
    } else {
        return 1;
    }
})
// console.table(presidentsSorted)
const presidentsSorted2 = presidents.sort((a, b) => {
    (a.died - a.born) > (b.died - b.born) ? -1 : 1
});
// console.table(presidentsSorted2)

// 6. Создать список названий городов (City) и областей (County) Калифорнии содержащих "San"
// https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_California
// const table = document.querySelector('.plainrowheaders');
// const tBody = Array.from(table.querySelector('tbody').querySelectorAll('a'));
// console.log(table, tBody)
// const ulCity = tBody.map(city => {return city.textContent}).filter(city => {
//     return city.includes('San')
// });
// console.log({ulCity})


// 7. Упражнение по сортировке
// Отсортировать массив "writers" по фамилии в алфавитном порядке
const sortArray = writers.sort((writerA, writerB) => {
    const [firstA, lastA] = writerA.split(', ');
    const [firstB, lastB] = writerB.split(', ');
    return `${lastA > lastB ? 1 : -1}`
})
// console.table(sortArray)


// 8. Упражнение по использованию метода Reduce
// Подсчитать - сколько раз встречается каждый элемент в массиве
const data = ['truck', 'car', 'car', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
    'walk', 'car', 'van', 'car', 'truck'];
const whotData = data.reduce((total, whot) => {
    if (!total[whot]) {
        total[whot] = 0;
    }
    total[whot]++;
    return total;

}, {})
// console.log(whotData)


// 9. Упражнение по использованию методов .foEach и Object.keys();
// Создать массив, который будет содержать только уникальные значения данного массива:
const fruits = ['apples', 'bananas', 'oranges', 'apples', 'grapes', 'bananas', 'peaches',
    'strawberries', 'oranges', 'apricots', 'bananas'];
const specialFruits = {};
fruits.forEach((fruit) => {
    specialFruits[fruit] = true;
})
const vanFruits = Object.keys(specialFruits)
// console.log(vanFruits)


