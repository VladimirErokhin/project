"use strict";

/* /* Задание на урокЖ

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMoveDB и в него поместить такие свойсва:
 - count - сюда передаётся ответ на первый вопрос
 - movies - в это свойство поместить пустой объект
 - actors - тоже поместить пустой объект
 - genres - сюда поместить пустой массив
 - privat - и это свойство поместить boolean (логическое) значение false

3) Задайте пользователю по два раза вопросы:
 - 'Один из последних просмотренных фильмов?'
 - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
  movies: {
      "logan": "8.1"
  }

  Проверить, чтобы всё было без ошибок */

/* const numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`, '');

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}



/* if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('ok');
} */



/* (num === 50) ? console.log('ok') : console.log('error'); */


const num = 50;

switch (num) {
    case 49:
        console.log('Heверно');
        break;
    case 100:
        console.log('Heверно');
        break;
    case 52:
        console.log('В точку!');
        break;
    default:
        console.log('He в этот раз');
        break;
}