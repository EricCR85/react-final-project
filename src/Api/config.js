export const TMDB_API_KEY = `9db3ff50f370b9420c7cc3fda825960b`;
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/w500"

// export async function searchMovies(query, page = 1) {
//     const url = `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`;

//     const res = await fetch(url);
//     const data = await res.json();
//     return data
// }

// export async function getPopularMovies(page = 1) {
//     const url = `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`;

//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
    
// }

// export async function getMovieDetails(id) {
//     const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`

//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// }


export const searchMovies = async (wuery) => {
    const res = await fetch (
        `${BASE_URL}/search/movie?api-key=${TMDB_API_KEY}&query=${query}`
    );
    return res.json();
};

export const getPopularMovies = async () => {
    const res = await fetch(
        `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`
    );
    return res.json();
};

export const getTopRatedMovies = async () => {
    const res = await fetch (
        `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`
    );
    return res.json();
};

export const getUpcomingMovies = async () => {
    const res = await fetch(
        `${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}`
    );
    return res.json();
};