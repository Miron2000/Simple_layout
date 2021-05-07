import fetchFilms from "./data.js";

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

class Film {
    constructor(id, name, genre, releaseDate, countries, assessment) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.countries = countries;
        this.assessment = assessment;
    }

    set id(id) {
        this._id = id
    }

    get id() {
        return this._id;
    }

    set name(name) {
        this._name = name.trim();
    }

    get name() {
        return this._name;
    }

    set genre(genre) {
        this._genre = genre.trim();
    }

    get genre() {
        return this._genre;
    }

    set releaseDate(releaseDate) {
        this._releaseDate = releaseDate.trim();
    }

    get releaseDate() {
        return this._releaseDate;
    }

    set countries(countries) {
        this._countries = countries.trim();
    }

    get countries() {
        return this._countries;
    }

    set assessment(assessment) {
        this._assessment = assessment
    }

    get assessment() {
        return this._assessment;
    }
};

class IMDBFilm extends Film {
    constructor(id, name, genre, releaseDate, countries, assessment, imdbFilm) {
        super(id, name, genre, releaseDate, countries, assessment);
        this.imdbFilm = imdbFilm;
    }

    set imdbFilm(imdbFilm) {
        this._imdbFilm = imdbFilm
    }

    get imdbFilm() {
        return this._imdbFilm;
    }
}

const GENRE = {comedy: 'comedy', horror: 'horror', drama: 'drama', superhero: 'superhero', fiction: 'fiction'};

class Horror extends IMDBFilm {
    constructor(id, name, genre, releaseDate, countries, assessment, imdbFilm) {
        super(id, name, GENRE.horror, releaseDate, countries, assessment, imdbFilm);
    }
}

class Comedy extends IMDBFilm {
    constructor(id, name, genre, releaseDate, countries, assessment, imdbFilm) {
        super(id, name, GENRE.comedy, releaseDate, countries, assessment, imdbFilm);
    }
}

class Drama extends IMDBFilm {
    constructor(id, name, genre, releaseDate, countries, assessment, imdbFilm) {
        super(id, name, GENRE.drama, releaseDate, countries, assessment, imdbFilm);
    }
}

class SuperheroMovie extends IMDBFilm {
    constructor(id, name, genre, releaseDate, countries, assessment, imdbFilm) {
        super(id, name, GENRE.superhero, releaseDate, countries, assessment, imdbFilm);
    }
}

class Fiction extends IMDBFilm {
    constructor(id, name, genre, releaseDate, countries, assessment, imdbFilm) {
        super(id, name, GENRE.fiction, releaseDate, countries, assessment, imdbFilm);
    }
}

const films = fetchFilms();
films.forEach(item => {

    function detailsConstructor (constructorName) {
        new constructorName(item.number, item.films, item.genre, item.releaseDate, item.countries, item.assessment, item.imdbFilm);
    }

    switch (item.genre.split(', ')[0].toLowerCase()) {
        case GENRE.comedy:
            detailsConstructor(Comedy);
            break;

        case GENRE.horror:
            detailsConstructor(Horror);
            break;

        case GENRE.drama:
            detailsConstructor(Drama);
            break;

        case GENRE.superhero:
            detailsConstructor(SuperheroMovie);
            break;

        case GENRE.fiction:
            detailsConstructor(Fiction);
            break;
    }

    detailsConstructor(IMDBFilm);
})

const column = [
    {acessor: 'number', title: 'Number'},
    {acessor: 'name', title: 'Films'},
    {acessor: 'genre', title: 'Genre'},
    {acessor: 'releaseDate', title: 'Release date'},
    {acessor: 'countries', title: 'Countries'},
    {acessor: 'assessment', title: 'Assessment'},
    {acessor: 'imdbFilm', title: 'IMDB'}
]

//for th
function createTableTitles(trHead) {
    column.forEach(item => {
        const th = document.createElement('th');
        th.innerHTML = item.title;
        trHead.appendChild(th);
    })
}

//for td
function createTableRows(tbody) {

    for (let item of films) {
        const tr = document.createElement('tr');

        function createTableColumnFilms(itemText) {
            let td = document.createElement('td')
            td.innerHTML = itemText;
            tr.appendChild(td);
        }

        column.forEach(i => {
            switch (i.acessor) {
                case 'number':
                    createTableColumnFilms(item.number);
                    break;

                case 'name':
                    createTableColumnFilms(item.films);
                    break;

                case 'genre':
                    createTableColumnFilms(item.genre);
                    break;

                case 'releaseDate':
                    createTableColumnFilms(item.releaseDate);
                    break;

                case 'countries':
                    createTableColumnFilms(item.countries);
                    break;

                case 'assessment':
                    createTableColumnFilms(item.assessment);
                    break;

                case 'imdbFilm':
                    createTableColumnFilms(item.imdbFilm);
                    break;
            }
        })

        tbody.appendChild(tr);
    }
};

createTableTitles(trHead);
createTableRows(tbody);
