const initialState = {
    favorites: [],
    movies: [],
    id: null,
    listArr: []
};

export default function reducer(state = initialState, action) {
    let favorites = null;
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
            favorites = [...state.favorites, match];
            return {
                ...state,
                favorites,
            }
        case "SET_ID": 
        return {
            ...state,
            id: action.payload.id,
        }
        case("MAKE_LIST"):
                return{
                    ...state,
                    listArr: action.payload.data
                }
        default:
            return state;

        case "REMOVE_FROM_FAVOURITES":
            favorites = [...state.favorites];

            let find = state.favorites.find(
              (item) => item.imdbID === action.payload.id
            );
      
            let index = state.favorites.indexOf(find);
            favorites.splice(index, 1);
      
            return {
              ...state,
              favorites,
            }; 
        
    }
}