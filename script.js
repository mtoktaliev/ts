let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?'),
            b = prompt('На сколько оцените его?');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

let showMyDB = (hidden) => {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

let writeYourGenres = () => {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

//======== Callback functions ===========

/*function sayHello(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function done() {
    console.log('Bye bye');
}

sayHello('Maks', done);*/


const options = {
    name: 'test',
    width: 1920,
    height: 1080,
    colors: {
        border: 'black',
        bg: 'red',
    },
    Metod: function () {
        console.log('Я метод объекта');
    }
};

options.Metod();

for (let key in options) {
    console.log(`Ключ: ${key} Значение: ${options[key]}`);
}

console.log(Object.keys(options).length);
console.log(Object.keys(options));