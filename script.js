/*  Задание на урокЖ

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

const numberOfFilms = ('Сколько фильмов вы уже посмотрели?');

const personalMoveDB = {
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

personalMoveDB.movies[a] = b;

personalMoveDB.movies[c] = d;

console.log(personalMoveDB);