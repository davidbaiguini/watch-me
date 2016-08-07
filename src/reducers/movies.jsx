import initialState from 'store/initialState.jsx';

export default function moviesReducer(state=initialState.movies, action='') {
    switch (action.type) {

        case 'LOAD_MOVIES_STARTED': {
          return { ...state, loading: true}
        }

        case 'LOAD_MOVIES_COMPLETED': {
          return { ...state, ...action.data, loading: false}
        }

        case 'LOAD_MOVIES_FAILED': {
          return { ...state, ...action.data, loading: false}
        }

        case 'PLAY_VIDEO_START': {
            return Object.assign({}, state, {
                entries: state.entries.map(movie => {
                    if(movie.id === action.id ) {
                       movie.isPlaying=true;
                    } else {
                        movie.isPlaying=false;
                    }
                    return movie;
                }

                )
            })
        }

        case 'UPDATE_INDEX_ACTIVE': {
            return { ...state, indexActiveMovie: action.index}
        }

    }

    return state;
};
