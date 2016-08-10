import React, {Component} from 'react';
import Axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import hotkey from 'react-hotkey';
import _ from 'lodash';
import { WindowResizeListener } from 'react-window-resize-listener';

import * as MoviesActions from 'actions/movies.jsx';
import MovieTile from 'components/main/MovieTile.jsx';
import KEYMAP from 'constants/keymap.jsx';
import {browserHistory} from 'react-router';


hotkey.activate('keydown');

function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth);
}


class MoviesList extends Component {

    constructor() {
        super();
        this.hotkeyHandler = this.handleHotkey.bind(this);
        this.itemsPerRow = 0;
    }

    getItemsPerRow() {
        if (this.refs.grid.childElementCount > 0) {
            let widthGrid =  parseInt(window.getComputedStyle(this.refs.grid).width, 10);
            let widthGridItem = parseInt(window.getComputedStyle(this.refs.grid.children[0]).width, 10);
            let itemsPerRow = parseInt(widthGrid / widthGridItem, 10);
            return itemsPerRow;
        }
        return 0;
    }

    handleResize(windowSize) {
        this.itemsPerRow = this.getItemsPerRow();
    }

    handleHotkey(e) {
        const keycode = e.keyCode;

        if ( KEYMAP[keycode] !== undefined ) {

            e.preventDefault();
            // e.stopPropagation();

            const maxIndex = this.props.movies.totalCount - 1;
            let indexActiveMovie = this.props.movies.indexActiveMovie;
            let newIndexActiveMovie = indexActiveMovie;
            let itemsPerRow = this.itemsPerRow;

            if(itemsPerRow === 0) {
                itemsPerRow = this.getItemsPerRow();
            }

            switch(KEYMAP[keycode]) {
                case "UP" : {
                    if(indexActiveMovie == -1) {
                        newIndexActiveMovie = 0;
                    } else if (indexActiveMovie > itemsPerRow - 1) {
                        newIndexActiveMovie = indexActiveMovie - itemsPerRow;
                    }
                    break;
                }
                case "DOWN" : {
                    if(indexActiveMovie == -1) {
                        newIndexActiveMovie = 0;
                    } else if(indexActiveMovie < maxIndex - itemsPerRow + 1) {
                        newIndexActiveMovie = indexActiveMovie + itemsPerRow;
                    }
                    break;
                }
                case "RIGHT" : {
                    newIndexActiveMovie = (indexActiveMovie < maxIndex ? ++indexActiveMovie : maxIndex);
                    break;
                }
                case "LEFT" : {
                    newIndexActiveMovie = (indexActiveMovie > 0) ? --indexActiveMovie : 0;
                    break;
                }
                case "ENTER" : {
                    const movieId = this.props.movies.entries[newIndexActiveMovie].id;
                    browserHistory.push(`/movie/${movieId}`);
                    break;
                }
            }
            this.props.actions.updateIndexActiveMovie(newIndexActiveMovie);
         }
    }

    scrollToElement(elem) {
        if (elem && !isInViewport(elem)) {
            elem.scrollIntoView({block: "end", behavior: "smooth"});
        }
    }

    componentDidUpdate() {
        // Scroll to item
        let grid = this.refs.grid;
        let indexSelectedMovie = this.props.movies.indexActiveMovie;
        let selectedMovieElem = this.refs.grid.children[indexSelectedMovie];

        if (indexSelectedMovie >= 0 ) {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded
            // Non-standard, may not work very well
            selectedMovieElem.scrollIntoViewIfNeeded(false);
            // this.scrollToElement(selectedMovieElem);
        }

    }

    componentDidMount() {
        hotkey.addHandler(this.hotkeyHandler);
        this.getItemsPerRow();
    }

    componentWillUnmount() {
        hotkey.removeHandler(this.hotkeyHandler);
    }

	render() {
        const movies = this.props.movies;
		return (
			<ul className="grid grid--marginbottom" ref="grid">
                <WindowResizeListener onResize={windowSize => {
                    this.handleResize(windowSize);
                }}/>
				{
                    movies.entries.map(function(movie, index) {
    					return (
    						<MovieTile key={index}
                                       index={index}
                                       data={movie}
                                       ref="gridItem"
                                       indexActiveMovie={movies.indexActiveMovie}
                                       ref={movie.id}>
    						</MovieTile>
    					)
	                })
                }
			</ul>
		)
	}
};


// maps
const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(MoviesActions, dispatch)
  }
}

// Connect
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
