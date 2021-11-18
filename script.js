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

/* if (4 == 9) {
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


/*const num = 50;

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
} */

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;

// }

// do{
//     console.log(num);
//     num++;
// }

// 

// for (let i = 1; i < 18; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не смог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма, длинее, чем 50 символов. Если это происходит, возвращаем пользователя к вопросам опять (К лбюой строке можно обратиться как - str.lenth - получить её длину).

3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести сообщение "Просмотренно довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а есди больше - "Вы киноман", а если не подошло ни к одному варианту - "Произошла ошибка".

4) Потренироваться и переписать цикл ещё двумя способами.*/

'use strict';

const numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`, '');

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("Произошла ошибка");
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log("personalMovieDB");
























[]