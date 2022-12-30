import axios from 'axios';

const ApiKey = '9a9abe516901ea117e86ba92a0d908e2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendMovies(page) {
  const response = await axios('trending/movie/week', {
    params: {
      api_key: ApiKey,
      page,
    },
  });
  // console.log(response.data);
  return response.data;
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

export async function fetchMovieByName(query, page) {
  const response = await axios('search/movie', {
    params: {
      api_key: ApiKey,
      query,
      page,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function fetchMovieCast(id) {
  const response = await axios(`movie/${id}/credits`, {
    params: {
      api_key: ApiKey,
    },
  });
  console.log(response.data.cast);
  return response.data.cast;
}

export async function fetchMovieReviews(id) {
  const response = await axios(`movie/${id}/reviews`, {
    params: {
      api_key: ApiKey,
    },
  });
  // console.log(response.data.results);
  return response.data.results;
}
