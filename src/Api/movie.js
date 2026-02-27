const TMDB_API_KEY = `9db3ff50f370b9420c7cc3fda825960b`;
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500"

export async function searchMovies(query, page = 1) {
    const url = `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`;

    const res = await fetch(url);
    const data = await res.json();
    return data
}

export async function getPopularMovies(page = 1) {
    const url = `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`;

    const res = await fetch(url);
    const data = await res.json();
    return data;
    
}

export async function getMovieDetails(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`

    const res = await fetch(url);
    const data = await res.json();
    return data;
}