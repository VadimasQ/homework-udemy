// "use strict";



// let numberOfFilms = +prompt("How many films have you seen already?", );
// console.log(typeof numberOfFilms);


// while ( numberOfFilms.length  === 0 ) {
//     // console.log(typeof numberOfFilms);
//     alert ("The input can't be empty");
//     numberOfFilms = +prompt("How many films have you seen already?", "");
// }
// while ( numberOfFilms < 0 ) {
//     // console.log(typeof numberOfFilms);
//     alert ("Don't play with me, the number can't be negative of text format!");
//     numberOfFilms = +prompt("How many films have you seen already?", "");
// }


// if (numberOfFilms <= 10) {
//     alert("You are rookie!");
    
// } else if (numberOfFilms <= 30) {
//     alert("You are average movie man");
    
// } else {
//     alert("You are advenced rocket racoon");
    
// } 




// let lastMovie = prompt("What is your last move you have wached?", "");
// while ( lastMovie.length  > 50 ) {
//     // console.log(typeof numberOfFilms);
//     alert ("The name of movie can't be over the 50 symbols");
//     lastMovie = prompt("What is your last move you have wached?", "");
// }




// let rateOfLastMovie = +prompt("Please, rate your last movie from 0 to 10", "");



// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// personalMovieDB.movies = [lastMovie, rateOfLastMovie];
    


// console.log(personalMovieDB);
//________________________________________________________________________________________________________________________________

const numberOfFilms = +prompt("How many films have you seen already?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What is your last move you have wached?", ""),
      b = +prompt ("Please, rate your last movie from 0 to 10", ""),
      c = prompt("What is your last move you have wached?", ""),
      d = +prompt ("Please, rate your last movie from 0 to 10", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);