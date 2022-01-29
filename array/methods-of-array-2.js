// ## Основные Методы Массивов - 2

const people = [
    { name: 'Станислав', year: 2000 },
    { name: 'Василий', year: 1986 },
    { name: 'Александр', year: 1990 },
    { name: 'Владимир', year: 2004 },
];

const comments = [
    { text: 'Отличный пост!', id: 523423 },
    { text: 'Мне нравится', id: 823423 },
    { text: 'Продолжай в том же духе', id: 2039842 },
    { text: 'Все аццццтой !!!!!', id: 123523 },
    { text: 'Нормально', id: 542328 }
];

//## Методы Some и Every

// Array.prototype.some() -> Проверить, что по крайней мере одному из людей исполнилось 16 лет.
const oncePeople = people.some((person) => {
    return new Date().getFullYear() - person.year >= 16;
})
console.log(oncePeople)
const isSixteen = people.some(person => new Date().getFullYear() - person.year >= 20);
console.log({isSixteen})
// Array.prototype.every() -> Проверить, что каждому из людей исполнилось 16 лет.
const everyPeoples = people.every(person => new Date().getFullYear() - person.year > 16);
console.log({everyPeoples})

// ## Array.prototype.find() -> Возвращает первый элемент массива, который удовлетворяет нашим требованиям

// Задача: найти комментарий, c номером ID - 823423
const findId = comments.find(comment => comment.id === 823423);
console.log({findId})

// ## Array.prototype.findIndex() -> Возвращает индекс первого элемента, который удовлетворяет нашим требованиям

// Задача: удалить из массива комментарий с номером ID 123523
// 1. Находим индекс нужного нам комментария
const commentIndexId = comments.findIndex(index => index.id === 123523);
console.log({commentIndexId})

// 2. Удаляем комментарий из массива (используем метод spice())
// const deleteComment = comments.splice(commentIndexId, 1);
// console.log({deleteComment, comments})


// 2.1 Удаляем комментарий из массива (используем метод slice() и оператор spread)

// slice() создает новый массив, куда копирует елементы начиная с индекса старт и до end (не включая end)
// используем оператор spread для копирования всех элементов первого и воторого массива в новый массив newComments:
const finalArray1 = comments.slice(0,commentIndexId)
const finalArray2 = comments.slice(commentIndexId + 1)
const finalArray = [...finalArray1, ...finalArray2]
console.log({finalArray1, finalArray2, finalArray, comments})