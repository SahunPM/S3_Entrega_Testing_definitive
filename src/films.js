  // Exercise 1: Get the array of all directors.
  function getAllDirectors(movies) {
    let result = movies.map(movie => movie.director);
    console.log("EXERCISE 1 ->", result);
    return result;
    }

  // Exercise 2: Get the films of a certain director
  function getMoviesFromDirector(movies, director) {
    let moviesByDirector = movies.filter(movie => movie.director === director);
    console.log(`Movies directed by ${director}:`, moviesByDirector);
    return moviesByDirector;
    }

  // Exercise 3: Calculate the average of the films of a given director.
  function moviesAverageOfDirector(movies, directorName) {
    const directorMovies = getMoviesFromDirector(movies, directorName);
    const totalScores = directorMovies.reduce((total, movie) => total + movie.score, 0);
    const averageScore = totalScores / (directorMovies.length || 1);
    console.log(`Average score of movies by ${directorName}:`, averageScore);
    return averageScore;
  }



  // Exercise 4:  Alphabetic order by title 
  function orderAlphabetically(movies) {
    const onlyTitles = movies.map(movie => movie.title);
    const orderedTitles = onlyTitles.sort();
    const top20Titles = orderedTitles.slice(0, 20);
    console.log('Top 20 titles in alphabetical order:', top20Titles);
    return top20Titles;
  }


  // Exercise 5: Order by year, ascending
  function orderByYear(movies) {
    const yearOrdered = [...movies].sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title, 'en', { sensitivity: 'base' });
      }
      return a.year - b.year;
    });
    console.log('Movies ordered by year:', yearOrdered);
    return yearOrdered;
  }


  // Exercise 6: Calculate the average of the movies in a category
  function moviesAverageByCategory(movies, genre) {
    const moviesInCategory = movies.filter(movie => movie.genre.includes(genre));
    
    if (moviesInCategory.length === 0) {
      return 0;
    }

    const totalScores = moviesInCategory.reduce((total, movie) => total + movie.score, 0);
    const averageScore = totalScores / moviesInCategory.length;
    console.log(`Average score in ${genre} category:`, averageScore);
    return averageCategory;
  }


  // Exercise 7: Modify the duration of movies to minutes
  function hoursToMinutes(movies) {
    const updatedMovies = movies.map(movie => {
      const duration = movie.duration.split(' '); 
      let totalMinutes = 0;
      for (const time of duration) {
        if (time.includes('h')) {
          totalMinutes += parseInt(time) * 60; 
        } else if (time.includes('min')) {
          totalMinutes += parseInt(time); 
        }
      }
      
      // Mantén totalMinutes como número, no lo conviertas a cadena aquí
      const updatedDuration = totalMinutes;
      
      console.log(`Updated duration for "${movie.title}": ${updatedDuration} minutes`);
      
      return { ...movie, duration: updatedDuration }; 
    });
  
    return updatedMovies;
  }
  
  
  

  // Exercise 8: Get the best film of a year
  function bestFilmOfYear(movies, year) {
    const moviesOfYear = movies.filter(movie => movie.year === year);
  
    if (moviesOfYear.length === 0) {
      return []; 
    }
  
    const bestMovie = moviesOfYear.sort((a, b) => b.score - a.score)[0];
    console.log(`Best film of ${year}: ${bestMovie.title}`);
    return [bestMovie]; 
  }
  
  



  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = {
      getAllDirectors,
      getMoviesFromDirector,
      moviesAverageOfDirector,
      orderAlphabetically,
      orderByYear,
      moviesAverageByCategory,
      hoursToMinutes,
      bestFilmOfYear,
    };
  }
