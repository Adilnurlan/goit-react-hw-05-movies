import axios from 'axios';

const ApiKey = '9a9abe516901ea117e86ba92a0d908e2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendMovies() {
  const response = await axios('trending/movie/week', {
    params: {
      api_key: ApiKey,
    },
  });
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios(`movie/${id}`, {
    params: {
      api_key: ApiKey,
    },
  });
  //   console.log(response.data);
  return response.data;
}

export async function fetchMovieByName(query) {
  const response = await axios('search/movie', {
    params: {
      api_key: ApiKey,
      query,
    },
  });
  // console.log(response.data);
  return response.data.results;
}

// export async function fetchMovieReviews(id) {
//   const response = await axios(`movie/${id}/reviews`, {
//     params: {
//       api_key: ApiKey,
//     },
//   });
//   console.log(response.data);
//   return response.data;
// }
