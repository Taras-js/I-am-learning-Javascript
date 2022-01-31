// Шаблонные строки
const car = {
    name: 'Tesla',
    year: 2012
}
const details = `Автомобиль ${car.name} выпущен с завода в ${car.year} году`;
console.log(details)
const newHtml = `<div>${car.name}</div> <div>${car.year}</div>`;
document.body.innerHTML= newHtml;
console.log(newHtml)
const cars = [
    {   name: 'Tesla',
        year: 2019
    },
    {   name: 'Lada',
        year: 2010
    },
    {   name: 'Lada',
        year: 2010
    },
    {   name: 'Lada',
        year: 2010
    },
    {   name: 'Lada',
        year: 2010
    }
]
const htmlNew = `
<ul>
${cars.map(car => `<li>${car.name}</li>`).join(' ')}
</ul>
`;
console.log(htmlNew)
document.body.innerHTML = htmlNew;
const car = {
    // name: 'Tesla',
    // year: 2012,
    info: ['electric', 'modern', 'functional']
};
const infoAdd = (infos) => {
    return`
<div>
    ${infos.map(info => `<div>${info}</div>`).join(' ')}
</div>
`;
}
const newHtml = `
<ul>
${car.name ? `<p>${car.name}</p>` : ''}

${car.year ? `<p>${car.year}</p>`: ''}
<p>${infoAdd(car.info)}</p>
</ul>
`;
console.log(newHtml)
document.body.innerHTML = newHtml;