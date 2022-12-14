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

export function removeFromFavourites(id) {
    return {
        type: "REMOVE_FROM_FAVOURITES",
        payload: {
            id: id,
        },
    };
}
