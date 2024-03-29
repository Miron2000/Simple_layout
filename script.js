import fetchFilms from "./data.js";
import data from "./data.js";

const sectionTable = document.querySelector(".section-table");
const table = document.createElement("table");
table.classList.add("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const trHead = document.createElement("tr");

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
        this._id = id;
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
        this._assessment = assessment;
    }

    get assessment() {
        return this._assessment;
    }
}

class IMDBFilm extends Film {
    constructor(id, name, genre, releaseDate, countries, assessment, imdbFilm) {
        super(id, name, genre, releaseDate, countries, assessment);
        this.imdbFilm = imdbFilm;
    }

    set imdbFilm(imdbFilm) {
        this._imdbFilm = imdbFilm;
    }

    get imdbFilm() {
        return this._imdbFilm;
    }
}

const GENRE = {
    comedy: "comedy",
    horror: "horror",
    drama: "drama",
    superhero: "superhero",
    fiction: "fiction",
};

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
        super(
            id,
            name,
            GENRE.superhero,
            releaseDate,
            countries,
            assessment,
            imdbFilm
        );
    }
}

class Fiction extends IMDBFilm {
    constructor(id, name, genre, releaseDate, countries, assessment, imdbFilm) {
        super(
            id,
            name,
            GENRE.fiction,
            releaseDate,
            countries,
            assessment,
            imdbFilm
        );
    }
}

const films = fetchFilms();
films.forEach((item) => {
    function detailsConstructor(constructorName) {
        new constructorName(
            item.number,
            item.films,
            item.genre,
            item.releaseDate,
            item.countries,
            item.assessment,
            item.imdbFilm
        );
    }

    switch (item.genre.split(", ")[0].toLowerCase()) {
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
});

const column = [
    {acessor: "number", title: "Number", data: "integer"},
    {acessor: "name", title: "Films", data: "text"},
    {acessor: "genre", title: "Genre", data: "text"},
    {acessor: "releaseDate", title: "Release date", data: "date"},
    {acessor: "countries", title: "Countries", data: "text"},
    {acessor: "assessment", title: "Rating", data: "double"},
    {acessor: "imdbFilm", title: "IMDB", data: "boolean"},
];

//for th
function createTableTitles(trHead) {
    column.forEach((item) => {
        const th = document.createElement("th");
        th.innerHTML = item.title;
        trHead.appendChild(th);
        th.setAttribute("data-type", item.data);
    });
}

//for td
function createTableRows(tbody) {
    for (let item of films) {
        const tr = document.createElement("tr");

        function createTableColumnFilms(itemText) {
            let td = document.createElement("td");
            td.innerHTML = itemText;
            tr.appendChild(td);
        }

        column.forEach((i) => {
            switch (i.acessor) {
                case "number":
                    createTableColumnFilms(item.number);
                    break;

                case "name":
                    createTableColumnFilms(item.films);
                    break;

                case "genre":
                    createTableColumnFilms(item.genre);
                    break;

                case "releaseDate":
                    createTableColumnFilms(item.releaseDate);
                    break;

                case "countries":
                    createTableColumnFilms(item.countries);
                    break;

                case "assessment":
                    createTableColumnFilms(item.assessment);
                    break;

                case "imdbFilm":
                    createTableColumnFilms(item.imdbFilm);
                    break;
            }
        });

        tbody.appendChild(tr);
    }
}

createTableTitles(trHead);

//Sorting by rating and displaying in the table from smallest to largest
function sortRating(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

films.sort(sortRating('assessment'));

createTableRows(tbody);
const rowsArray = [].slice.call(tbody.rows);

///////////////////////////QUICK SORT/////////////////////////////////////////
let activeColumnIndex = -1;

table.addEventListener("click", (event) => {
    let elTarget = event.target;
    const index = elTarget.cellIndex; //index елемента(th) на который кликнули
    const type = elTarget.getAttribute("data-type");

    if (elTarget.tagName !== "TH") return;

    sortTable(rowsArray, index, type, activeColumnIndex === index);
    activeColumnIndex = activeColumnIndex === index ? -1 : index;
});

function sortTable(rowsArray, index, type, isSorted) {
    const sortArr = quickSort(rowsArray, index);

    if (isSorted) {
        sortArr.reverse();
    }

    table.removeChild(tbody);

    for (let i = 0; i < sortArr.length; i++) {
        tbody.appendChild(sortArr[i]);
    }

    table.appendChild(tbody);

    function getColumnValue(row, cellIndex) {
        if (type === "integer" || type === "double") {
            return +row.cells[cellIndex].innerText;
        } else if (type === "text") {
            return row.cells[cellIndex].innerText;
        } else if (type === "date") {
            const dateA = row.cells[cellIndex].innerText.split(".").reverse().join("-");
            return new Date(dateA).getTime();
        } else {
            throw new Error("Invalid type. Please choose another type");
        }
    }

    function quickSort(arr, columnIndex) {
        if (arr.length < 2) return arr;
        let pivotRow = arr[0];
        let pivot = getColumnValue(pivotRow, columnIndex);
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            const columnValue = getColumnValue(arr[i], columnIndex);
            if (pivot > columnValue) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...quickSort(left, columnIndex), pivotRow, ...quickSort(right, columnIndex)];
    }
}

//LinerSearch
document.querySelector('.inputLinerSearch').oninput = function () {
    const elasticItem = [...rowsArray];
    let val = this.value.trim().toLowerCase();
    const sortArr = filterArr(elasticItem, val);//filtered array

    tbody.innerHTML = '';
    sortArr.forEach(item => {
        tbody.appendChild(item);
    })
}

function filterArr(rowsArr, val) {
    if (val === '') {
        return rowsArr
    } else {
        return rowsArr.filter(item => {
            let row = item.innerText.toLowerCase();
            return row.search(val) !== -1;
        });
    }
};


//BinarySearch
document.querySelector('.inputBinarySearch').oninput = function () {
    const elasticItem = [...rowsArray];//массив с <tr>
    let val = this.value.trim();

    tbody.innerHTML = '';

    if (val === '') {
        elasticItem.forEach(item => {
            tbody.appendChild(item);
        })
        return;
    }

    const ratingArr = elasticItem.map((item) => +item.cells[5].innerText);//массив с числами рейтинга
    const indexSearch = binarySearch(ratingArr, val);

    function drawTableBinarySearch(indexSearch) {
        tbody.innerHTML = '';
        if (indexSearch === -1) {
            return;
        }
        let outputArray = [indexSearch];

        let i = indexSearch;
        while (ratingArr.length > i + 1 && ratingArr[i] === ratingArr[i + 1]) {
            outputArray.push(i + 1);
            i++;
        }

        i = indexSearch;
        while (i - 1 >= 0 && ratingArr[i] === ratingArr[i - 1]) {
            outputArray.push(i - 1);
            i--;
        }

        for (let i = 0; i < outputArray.length; i++) {
            tbody.appendChild(elasticItem[outputArray[i]]);
        }

    };

    drawTableBinarySearch(indexSearch);
}

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid;

    if (target === '') {
        return -1;
    }

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;

        if (+target === array[mid]) {
            return mid;
        } else if (+target < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
};
