// axios
//   .get(
//     `https://api.themoviedb.org/3/movie/76341?api_key=b3b2808173dccf7a658ad31dd4253d93&language=rus-RU`
//   )
//   .then((res) => {
//     const persons = res.data;
//     console.log(persons);
//   });
// деталка фильма запрос

// axios
//   .get(
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=b3b2808173dccf7a658ad31dd4253d93&language=ru-RU`
//   )
//   .then((res) => {
//     const persons = res.data;
//     console.log(persons);
//   });
// список фильмов с лучшим рейтингом на сайте

// axios
//   .get(
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=b3b2808173dccf7a658ad31dd4253d93&language=ru-RU`
//   )
//   .then((res) => {
//     const movies = res.data;
//     console.log(movies);
//     return movies.results.map((movie) => ({
//       id: movie.id,
//       name: movie.title,
//       poster: movie.poster_path,
//       rating: movie.vote_average,
//     }));
//   });

// axios
//   .get(
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=b3b2808173dccf7a658ad31dd4253d93&language=ru-RU`
//   )
//   .then((res) => {
//     const movies = res.data;
//     console.log(movies);
//     console.log(
//       movies.results.map((movie) => ({
//         id: movie.id,
//         name: movie.title,
//         poster: movie.poster_path,
//         rating: movie.vote_average,
//       }))
//     );
//   });

// не работает
// const getPersonImage = ({ poster }) => {
//     return `https://www.themoviedb.org/t/p/w220_and_h330_face${movieCard[2].}.jpg`;
//   };
// });
// }, []);
