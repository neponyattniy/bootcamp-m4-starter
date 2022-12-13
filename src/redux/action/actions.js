export function addMovies(movie) {
    return {
        type: "ADD_MOVIES",
        payload: {
           movie: movie,
        }
    }
}

export function addToFavourites(id) {
    return {
        type: "ADD_TO_FAVOURITES",
        payload: {
            id: id,
        },
    };
}

export function removeMovieFromFavourites(id) {
    return {
        type: "REMOVE_MOVIE_FROM_FAVOURITES",
        payload: {
            id: id,
        },
    };
}