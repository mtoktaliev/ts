let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?'),
//         b = prompt('На сколько оцените его?');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }

let i = 0;
while (i < 2) { // выводит 0, затем 1, затем 2
    let a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько оцените его?');
  i++;
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
} else {
    i--;
}
}


if (personalMovieDB.count <= 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}


console.log(personalMovieDB);