import axios from 'axios';

export function loadMovies() {
  return (dispatch) => {

        dispatch({ type: "LOAD_MOVIES_STARTED" });

        return axios.get('https://demo2697834.mockable.io/movies')
            .then((response) => {
                dispatch({ type: "LOAD_MOVIES_COMPLETED", data: response.data });
            })
            .catch((err) => {
                dispatch({ type: "LOAD_MOVIES_FAILED", data: err })
            })
    };

}

export function playMovie(movieId) {
    return {
        type: "PLAY_VIDEO_START",
        id: movieId
    }
}

export function getMovie(movieId) {
    return {
        type: "PLAY_VIDEO_START",
        id: movieId
    }
}

export function updateIndexActiveMovie(newIndexActiveMovie) {
    return {
        type: "UPDATE_INDEX_ACTIVE",
        index: newIndexActiveMovie
    }
}
