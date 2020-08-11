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

'use strict';
//i browseri isvedame popup lentele su klausimu
let numberOfFilms;

function start () {
    numberOfFilms = +prompt("How many films have you seen already?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you seen already?", '');
    }
}

start();

//sukuriame objekta
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// //iviniojam salygas i funkcija
// function rememberMyMovies () {
// //parasome cikla pasikartojanti 2 kartus
// for (let i = 0; i < 2; i++) {
//     const a = prompt("What is your last move you have wached?", ""),
//           b = +prompt ("Please, rate your last movie from 0 to 10", "");

//     //aprasome salygas kur: null tai atsauktas langas a!=null, && = ir, patikrinima ar nera tusciu ivedimu a!="" ir teksto ilgis nedidesnis nei 50 simboliu (a.lenght < 50)
//           if (a != null && b != null && a != "" && b !="" && a.length < 50) {
//             //duomenys irasome i objekta personalMovieDB movies
//           personalMovieDB.movies[a] = b;
//           console.log("Done");
//     } else {
//         // jei nors viena if salyga netenkima rasome, kad klaida ir maziname i, kad ciklas pasikartotu
//         console.log("error");
//         i--;
//     }

//   }
// }
// //iskvieciam funkcija
// rememberMyMovies ();

// function detectPersonalLevel() {

//     if (personalMovieDB.count <= 10) {
//         console.log("You are rookie!");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//         console.log("You are average movie man");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("You are advenced rocket racoon");}
//         else {console.log("Don't play with me!");}
// }

// detectPersonalLevel();

//________________________________________________________________________________________________________
//funkcijoje tikriname boolean tipa ir apverciame jo reiksme su zenkliuku !
function showMyDB (hidden) {
    if (!hidden) {
        console.log( personalMovieDB );
    } 
}
//paskelbiame funkcija ir istatome reiksme
showMyDB (personalMovieDB.privat);
//___________________________________________________________________________________________________________
//funkcijoje generuojame 3 klausimus apie megstama zanra
function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        //${} leidia dinamiskai atnaujinti i reiksmes (reikalingi backticai ``)
        const a = prompt(`Your favorite genres ${i}`);
        //irasome klausimo reiksme i personalMovieDB zanru kategorija
        personalMovieDB.genres[i - 1] = a;
    }
}

writeYourGenres();

console.log(personalMovieDB);
// //__________________________________________________________________________________________________


// function calc(a, b) {
//     return (a * b);
// }

// console.log(calc(15, 32));

// let variableFunction = function test(c, d) {
//     return (c + d);
// }

// console.log(variableFunction(5, 6));

// const str = "Test";

// console.log(str);



// const i = "Hello bitches";

// console.log(i.slice(0, 9));