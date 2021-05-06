import fetchFilms from './data.js';

let table = document.querySelector('.table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
//для thead
const trHead = document.createElement('tr');
table.appendChild(thead);
thead.appendChild(trHead);
table.appendChild(tbody);

const films = fetchFilms();

//для th
const title = [{number: 'Number'}, {films: 'Films'}, {genre: 'Genre'}, {releaseDate: 'Release date'}, {countries:'Countries'}, {assessment:'Assessment'}];


title.forEach(item => {
    for (let [key, value] of Object.entries(item)) {
        let th = document.createElement('th')
        th.innerHTML = value;
        trHead.appendChild(th);
    }
})

//для td
for (let item of films) {
    const tr = document.createElement('tr');

    function fillFilms (itemText) {
        let td = document.createElement('td')
        td.innerHTML = itemText;
        tr.appendChild(td);
    }

    fillFilms(item.number);
    fillFilms(item.films);
    fillFilms(item.genre);
    fillFilms(item.releaseDate);
    fillFilms(item.countries);
    fillFilms(item.assessment);

    tbody.appendChild(tr);
}


//Добавление ячеек в таблицу
// //Для thead
// for (let i = 0; i < 6; i++) {
//     const th = document.createElement('th');
//     tr.appendChild(th);
// }

//Для tbody
// for (let i = 0; i < 6; i++) {
//     const tr = document.createElement('tr');
//     tbody.appendChild(tr);
//
//     for (let i = 0; i < 6; i++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//     }
// }
