const sectionTable = document.querySelector('.section-table');
const table = document.createElement('table');
table.classList.add('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const trHead = document.createElement('tr');

sectionTable.appendChild(table);
table.appendChild(thead);
thead.appendChild(trHead);
table.appendChild(tbody);


const films = [
    {
        id: 1,
        films: 'Papillon',
        genre: 'Drama, crime',
        releaseDate: 'September 9, 2017',
        countries: 'USA',
        assessment: 8.9
    },
    {
        id: 2,
        films: 'The Hangover',
        genre: 'Сomedy',
        releaseDate: 'May 30, 2009 ',
        countries: 'USA',
        assessment: 9.0
    },
    {
        id: 3,
        films: 'Babysitting',
        genre: 'Сomedy',
        releaseDate: '16 April 2014',
        countries: 'France',
        assessment: 8.7
    },
    {
        id: 4,
        films: 'Venom',
        genre: 'Drama, crime',
        releaseDate: 'October 1, 2018',
        countries: 'USA',
        assessment: 7.8
    },
    {
        id: 5,
        films: 'Papillon',
        genre: 'Superhero movie, crime',
        releaseDate: 'September 9, 2017',
        countries: 'USA',
        assessment: 8.5
    },
    {
        id: 6,
        films: 'Papillon',
        genre: 'Drama, crime',
        releaseDate: 'September 9, 2017',
        countries: 'USA',
        assessment: 8.5
    },
];

//для th
// const column = [{number: 'Number'}, {films: 'Films'}, {genre: 'Genre'}, {releaseDate: 'Release date'}, {countries:'Countries'}, {assessment:'Assessment'}];

//сделать так что бы acessor соотвествовал ключам к массиву films типу (if(item.acessor === films.number);
// Не пойму в films нужно сделать в каждом обьекте какой то типу status что бы ( if(item.acessor === films.status))
const column = [
    {acessor: 'number', title: 'Number'},
    {acessor: 'films', title: 'Films'},
    {acessor: 'genre', title: 'Genre'},
    {acessor: 'releaseDate', title: 'Release date'},
    {acessor: 'countries', title: 'Countries'},
    {acessor: 'assessment', title: 'Assessment'}
];


column.forEach(item => {
    // let value = Object.values(item);
    // let th = document.createElement('th')
    // th.innerHTML = value;
    // trHead.appendChild(th);

    const th = document.createElement('th');
    th.innerHTML = item.title;
    trHead.appendChild(th);

})

//для td
for (let item of films) {
    const tr = document.createElement('tr');

    function fillFilms(itemText) {
        let td = document.createElement('td')
        td.innerHTML = itemText;
        tr.appendChild(td);
    }

    //вызывать тогда когда оно равно title if(item.acessor === films.number)
    column.forEach(i => {
        if(i.acessor === 'number'){
            fillFilms(item.id);
        }
        if(i.acessor === 'films'){
            fillFilms(item.films);
        }
        if(i.acessor === 'genre'){
            fillFilms(item.genre);
        }
        if(i.acessor === 'releaseDate'){
            fillFilms(item.releaseDate);
        }
        if(i.acessor === 'countries'){
            fillFilms(item.countries);
        }
        if(i.acessor === 'assessment'){
            fillFilms(item.assessment);
        }
    })
    // fillFilms(item.id);
    // fillFilms(item.films);
    // fillFilms(item.genre);
    // fillFilms(item.releaseDate);
    // fillFilms(item.countries);
    // fillFilms(item.assessment);

    tbody.appendChild(tr);
}
