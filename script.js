let table = document.querySelector('.table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
//для thead
const trHead = document.createElement('tr');
table.appendChild(thead);
thead.appendChild(trHead);
table.appendChild(tbody);


const films = [
    {
        number: '1',
        films: 'Papillon',
        genre: 'Drama, crime',
        releaseDate: 'September 9, 2017',
        countries: 'USA',
        assessment: '8.9'
    },
    {
        number: '2',
        films: 'The Hangover',
        genre: 'Сomedy',
        releaseDate: 'May 30, 2009 ',
        countries: 'USA',
        assessment: '9.0'
    },
    {
        number: '3',
        films: 'Babysitting',
        genre: 'Сomedy',
        releaseDate: '16 April 2014',
        countries: 'France',
        assessment: '8.7'
    },
    {
        number: '4',
        films: 'Venom',
        genre: 'Drama, crime',
        releaseDate: 'October 1, 2018',
        countries: 'USA',
        assessment: '7.8'
    },
    {
        number: '5',
        films: 'Papillon',
        genre: 'Superhero movie, crime',
        releaseDate: 'September 9, 2017',
        countries: 'USA',
        assessment: '8.5'
    },
    {
        number: '6',
        films: 'Papillon',
        genre: 'Drama, crime',
        releaseDate: 'September 9, 2017',
        countries: 'USA',
        assessment: '8.5'
    },
];

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
