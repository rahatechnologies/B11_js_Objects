'use strict';

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  // let filteredMovies;
  // if (filter === '') {
  //   filteredMovies = movies;
  // } else {
  //   filteredMovies = movies.filter((movie) =>
  //     movie.info.title.includes(filter)
  //   );
  // }

  const filteredMovies =
    // filter === ''
    //  truthy / falsy value
    !filter
      ? movies
      : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');

    // Object Destructuring
    // const { info, id } = movie;

    //  Checking proiperty existance in movie Object
    // if (!movie.info) {
    // }

    const { info, ...otherProps } = movie;
    console.log(otherProps);

    // const { title } = info;

    // Rename original property
    // const { title: movieTitle } = info;

    // let movieInfo = movie.info;
    // let movieTitle = movieInfo.title;

    // property chaining
    // let text = movie.info.title + ' - ';
    // let text = info.title + ' - ';
    // let text = movieTitle.toUpperCase() + ' - ';
    // =======================================
    // Process 1
    // let text = movie.getFormattedTitle() + ' - ';
    // =======================================
    // Process2 (using bind method)

    // let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    // let text = getFormattedTitle() + ' - ';
    // =======================================
    // Process3 (using call method)
    // let { getFormattedTitle } = movie;

    // let text = getFormattedTitle.call(movie) + ' - ';

    // =======================================
    // Process3 (using apply method)
    // let { getFormattedTitle } = movie;

    // let text = getFormattedTitle.apply(movie) + ' - ';
    // =======================================
    // Process4 (using direct property access using getter method)
    let text = movie.info.title + ' - ';

    // for (const key in movie.info) {
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        //  Dynamic property access
        text = text + `${key} : ${movie.info[key]}`;
      }
    }

    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  //  validation
  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      // for setting _title use getter
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },

      // for accessing _title use getter
      get title() {
        return this._title.toUpperCase();
      },

      // title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),

    // getFormattedTitle: function () {

    // Method shorthand in Object
    // getFormattedTitle() {
    //   console.log(this);
    //   return this.info.title.toUpperCase();
    // },
  };

  // invoke setter of _title field of newMovie object
  newMovie.info.title = title;

  // invoke getter of _title field of newMovie object
  console.log(newMovie.info.title);

  movies.push(newMovie);
  console.log(newMovie);
  // Rendering new movie in Ul
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  // Rendering filtered movie in Ul
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
