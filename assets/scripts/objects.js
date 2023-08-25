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
    const { title: movieTitle } = info;

    // let movieInfo = movie.info;
    // let movieTitle = movieInfo.title;

    // property chaining
    // let text = movie.info.title + ' - ';
    // let text = info.title + ' - ';
    let text = movieTitle.toUpperCase() + ' - ';

    // for (const key in movie.info) {
    for (const key in info) {
      if (key !== 'title') {
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
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    xyz: 'abc',
  };

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
