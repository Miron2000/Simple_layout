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
        name: 'Papillon',
        genre: 'Drama, crime',
        releaseDate: 'September 9, 2017',
        countries: 'USA',
        assessment: 8.9
    },
    {
        id: 2,
        name: 'The Hangover',
        genre: 'Сomedy',
        releaseDate: 'May 30, 2009 ',
        countries: 'USA',
        assessment: 9.0
    },
    {
        id: 3,
        name: 'Babysitting',
        genre: 'Сomedy',
        releaseDate: '16 April 2014',
        countries: 'France',
        assessment: 8.7
    },
    {
        id: 4,
        name: 'Venom',
        genre: 'Drama, crime',
        releaseDate: 'October 1, 2018',
        countries: 'USA',
        assessment: 7.8
    },
    {
        id: 5,
        name: 'Papillon',
        genre: 'Superhero movie, crime',
        releaseDate: 'September 9, 2017',
        countries: 'USA',
        assessment: 8.5
    },
    {
        id: 6,
        name: 'Papillon',
        genre: 'Drama, crime',
        releaseDate: 'September 9, 2017',
        countries: 'USA',
        assessment: 8.5
    },
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
                fillFilms(item.id);
            }
            if (i.acessor === 'name') {
                fillFilms(item.name);
            }
            if (i.acessor === 'genre') {
                fillFilms(item.genre);
            }
            if (i.acessor === 'releaseDate') {
                fillFilms(item.releaseDate);
            }
            if (i.acessor === 'countries') {
                fillFilms(item.countries);
            }
            if (i.acessor === 'assessment') {
                fillFilms(item.assessment);
            }
        })

        tbody.appendChild(tr);
    }
};

createTitleTable(trHead);
createColumnTable(tbody);