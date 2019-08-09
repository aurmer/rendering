function renderMovieFrame(movie) {
  return `<div class="movie-container">
    <img class="movie-poster" src="${movie.poster}">
    <div class="movie-description">
      <h2 class="movie-title">${movie.title}</h2>
      <p class="movie-year">${movie.year}</p>
      <h3 class="rating">IMDB:</h3>
      <p class="rating">${movie.imdbRating}/10</p>
      <h3 class="rating">Rotten Tomatoes:</h3>
      <p class="rating">${movie.rottenTomatoesRating * 100}%</p>
    </div>
  </div>
  `
}


function renderMovies(movies) {
  let finalHTML = movies.map(renderMovieFrame).join('')

    return `
        <div class="text-center mt-5">
          ${finalHTML}
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}
