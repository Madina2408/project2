let NumberOfFilms;

function start(){
    NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
        
    while(NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)){
        NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

start();

const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
    /* решение с помощью цикла while*/
/*let i = 0;
    while(i<2){
        const a = prompt("Один из последних просмотренных фильмов?", ""),
       b = prompt("На сколько его оцените?", "");

        if(a != null && b!= null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b; 
            console.log('done!');
        } else{
            console.log('error');
            i--;
        }
       i++; 
    }*/

/* решение с помощью цикла do - while */
   /* let i = 0;
     do{
         const a = prompt("Один из последних просмотренных фильмов?", ""),
     b = prompt("На сколько его оцените?", "");

      if(a != null && b!= null && a != '' && b != '' && a.length < 50){
          personalMovieDB.movies[a] = b; 
          console.log('done!');
      } else{
          console.log('error');
          i--;
      }
      i++;
    }
    while(i<2);*/

    function rememberMyFilms(){
        for (let i = 0; i<2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                  b = prompt("На сколько его оцените?", "");
           
                   if(a != null && b!= null && a != '' && b != '' && a.length < 50){
                       personalMovieDB.movies[a] = b; 
                       console.log('done!');
                   } else{
                       console.log('error');
                       i--;
                   }
               
                   
               }
    }

rememberMyFilms();


function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
        console.log('Вы стандартный зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Поизошла ошибка');
    }
}

detectPersonalLevel();

    function showMyDB(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    }
showMyDB(personalMovieDB.privat);

    function writeYourGenres(){
        
        for(let i = 1; i<=3; i++) {
            const answer = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = answer;
        }

        
        console.log('done!');
    } 
writeYourGenres();

    //console.log(personalMovieDB);