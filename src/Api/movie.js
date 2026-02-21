const TMDB_API_KEY = `9db3ff50f370b9420c7cc3fda825960b`;
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500"

export async function searchMovies(query) {
    const url = `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}`;
    const res = await fetch(url);
    return res.json();
}

export async function getPopularMovies() {
    const url = `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`;
    const res = await fetch(url);
    return res.json();
    
}