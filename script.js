// import films from './OOP/classFilms.js';

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


class Films {
    constructor(id, name, genre, assessment) {
        this._id = id;
        this._name = name.trim();
        this._genre = genre.trim();
        this._assessment = assessment;
    }
//id
    set id(id) {
        this._id = id
    }

    get id() {
        return this._id;
    }
//name
    set name(name) {
        this._name = name.trim();
    }
    get name() {
        return this._name;
    }
    //genre
    set genre(genre) {
        this._genre = genre
    }

    get genre() {
        return this._genre;
    }
//assessment
    set assessment(assessment) {
        this._assessment = assessment
    }

    get assessment() {
        return this._assessment;
    }
}


class Film extends Films {
    constructor(id, name, genre, releaseDate, countries, assessment) {
        super(id, name, genre, assessment);
        this.releaseDate = releaseDate.trim();
        this.countries = countries.trim();
    }
}

// проверка set и get
// const test = new Films(1, 'Papillon', 'Drama, crime', 'September 9, 2017', 'USA', 8.9);
// test.name = "Miron";
// console.log(test.name);

const films = [
    new Film(1, 'Papillon', 'Drama, crime', 'September 9, 2017', 'USA', 8.9),
    new Film(2, 'The Hangover', 'Comedy', 'May 30, 2009', 'USA', 9.0),
    new Film(3, 'Babysitting', 'Сomedy', '16 April 2014','France',8.7),
    new Film(4, 'Venom', 'Drama, crime', 'October 1, 2018','USA',7.8),
    new Film(5, 'Papillon', 'Drama, crime', 'September 9, 2017','USA',8.9),
    new Film(6, 'Papillon', 'Drama, crime', 'September 9, 2017','USA',8.9)
];

const column = [
    {acessor: 'number', title: 'Number'},
    {acessor: 'name', title: 'Films'},
    {acessor: 'genre', title: 'Genre'},
    {acessor: 'releaseDate', title: 'Release date'},
    {acessor: 'countries', title: 'Countries'},
    {acessor: 'assessment', title: 'Assessment'}
];

//для th
function createTitleTable (trHead) {
    column.forEach(item => {
        const th = document.createElement('th');
        th.innerHTML = item.title;
        trHead.appendChild(th);
    })
}

//для td
function createColumnTable (tbody) {

    for (let item of films) {
        const tr = document.createElement('tr');

        function fillFilms(itemText) {
            let td = document.createElement('td')
            td.innerHTML = itemText;
            tr.appendChild(td);
        }

        column.forEach(i => {
            if (i.acessor === 'number') {
                fillFilms(item._id);
            }
            if (i.acessor === 'name') {
                fillFilms(item._name);
            }
            if (i.acessor === 'genre') {
                fillFilms(item._genre);
            }
            if (i.acessor === 'releaseDate') {
                fillFilms(item.releaseDate);
            }
            if (i.acessor === 'countries') {
                fillFilms(item.countries);
            }
            if (i.acessor === 'assessment') {
                fillFilms(item._assessment);
            }
        })

        tbody.appendChild(tr);
    }
};

createTitleTable(trHead);
createColumnTable(tbody);

