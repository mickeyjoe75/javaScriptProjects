const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getTitlesList = function () {
  return this.films.map((film) => {
    return film.title;
  })
};

Cinema.prototype.methodName = function () {

};


// Cinema.prototype.filterFilmsByGenre = function (genre) {
//   const genreArray = genre.filter(genre => gnere === genre)
// };

module.exports = Cinema;
