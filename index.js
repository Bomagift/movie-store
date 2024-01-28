class MovieStore {
    constructor() {
      this.movies = [
        { title: 'A Tribe Called Judah', genre: 'Drama', price: 150, available: true },
        { title: 'Merry Men', genre: 'Drama', price: 100, available: true }
      ];
    }
  
    addMovie(title, genre, price) {
      const newMovie = { title, genre, price, available: true };
      this.movies.push(newMovie);
      console.log('Added ' + title + ' to the movie store.');
    }
  
    rentMovie(title) {
      const movie = this.movies.find(function(movie) {
        return movie.title === title && movie.available;
      });
  
      if (movie) {
        movie.available = false;
        console.log('You have rented ' + title + '. Enjoy your movie night!');
      } else {
        console.log('Sorry, ' + title + ' is either not available or already rented.');
      }
    }
  
    displayMovies() {
      console.log("Movies available in the store:");
      this.movies.forEach(function(movie) {
        const status = movie.available ? "Available" : "Rented";
        console.log(movie.title + ' - ' + movie.genre + ' - ' + movie.price + '$ - ' + status);
      });
    }
  }
  
  // Example usage
  const movieStore = new MovieStore();
  movieStore.addMovie("Adire", "Drama", 104);
  movieStore.addMovie("The Matchmakers", "K-Drama", 80);
  movieStore.addMovie("King the Land", "K-Drama", 800);
  movieStore.addMovie("My Demon", "K-Drama", 700);
  movieStore.addMovie("Boys Over Flowers", "K-Drama", 600);
  movieStore.displayMovies();
  movieStore.rentMovie("My Demon");
  movieStore.displayMovies();