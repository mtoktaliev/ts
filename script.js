let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');
    
        while (this.count == null || this.count == '' || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');
        }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?'),
                b = prompt('На сколько оцените его?');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count <= 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = genre;
            if (genre === null || genre === '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

console.log(personalMovieDB);

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

//======== Callback functions ===========

/*function sayHello(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function done() {
    console.log('Bye bye');
}

sayHello('Maks', done);*/

//======== Object ===========

/*const options = {
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
console.log(Object.keys(options));*/

//======== Array ===========

/*let arr = [1, 2, 3, 4, 5];

arr[0] = 9;

arr.forEach(function(item) {
    console.log (item + 1);
})

console.log(arr);

let names = 'Вася, Петя, Маша';

let arr = names.split(', ');
arr.sort();

console.log(arr);*/


//======== Object copy ===========
/*let video = {
    1: 'youtube',
    2: 'vimeo', 
    3: 'rutube',
}

let newVideo = {};

Object.assign(newVideo, video);
console.log(newVideo);*/


//======== Object copy ===========
/*let soldier = {
    health: 400,
    armor: 100,
};

let john = {
    health: 200,
};

Object.setPrototypeOf(john, soldier);
console.log(john.armor);*/
