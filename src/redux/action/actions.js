export function addMovies(movie) {
    return {
        type: "ADD_MOVIES",
        payload: {
           movie: movie,
        }
    }
}