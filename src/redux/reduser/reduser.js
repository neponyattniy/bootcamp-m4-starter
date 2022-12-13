const initialState = {
    favorites: [],
    movies: [],
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case "ADD_MOVIES":
            const movies = action.payload.movie

            return {
                ...state,
                movies,
            }

        case "ADD_TO_FAVOURITES":
            const newState = { ...state };
            const id = action.payload.id;
            const match = newState.movies.find((item) => item.imdbID === id);
            let favorites = [...state.favorites, match];
            return {
                ...state,
                favorites,
            }
        default:
            return state;
    }


}
