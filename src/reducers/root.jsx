import {combineReducers} from 'redux';
import moviesReducer from 'reducers/movies.jsx';

export default combineReducers({
    movies: moviesReducer
});
