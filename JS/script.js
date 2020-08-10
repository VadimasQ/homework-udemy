"use strict";



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

//i browseri isvedame popup lentele su klausimu
const numberOfFilms = +prompt("How many films have you seen already?", '');

//sukuriame objekta
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//parasome cikla pasikartojanti 2 kartus
for (let i = 0; i < 2; i++) {
    const a = prompt("What is your last move you have wached?", ""),
          b = +prompt ("Please, rate your last movie from 0 to 10", "");

    //aprasome salygas kur: null tai atsauktas langas a!=null, && = ir, patikrinima ar nera tusciu ivedimu a!="" ir teksto ilgis nedidesnis nei 50 simboliu (a.lenght < 50)
          if (a != null && b != null && a != "" && b !="" && a.length < 50) {
            //duomenys irasome i objekta personalMovieDB movies
          personalMovieDB.movies[a] = b;
          console.log("Done");
    } else {
        // jei nors viena if salyga netenkima rasome, kad klaida ir maziname i, kad ciklas pasikartotu
        console.log("error");
        i--;
    }

}

if (personalMovieDB.count <= 10) {
    console.log("You are rookie!");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("You are average movie man");
} else if (personalMovieDB.count >= 30) {
    console.log("You are advenced rocket racoon");}
    else {console.log("Don't play with me!");}


console.log(personalMovieDB);

