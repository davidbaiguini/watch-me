import React, {Component} from 'react';
import Axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import hotkey from 'react-hotkey';
import _ from 'lodash';
import { WindowResizeListener } from 'react-window-resize-listener';

import * as Movies from 'actions/movies.jsx';
import MovieTile from 'components/main/MovieTile.jsx';
import KEYMAP from 'constants/keymap.jsx';
import {browserHistory} from 'react-router';


hotkey.activate();
// hotkey.activate('keydown');


class MoviesList extends Component {
    constructor() {
        super()
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
        console.log(e);
        const keycode = e.keyCode;
        e.nativeEvent.preventDefault();

        if ( KEYMAP[keycode] !== undefined ) {

            let newIndexActiveMovie = this.props.movies.indexActiveMovie;
            const maxIndex = this.props.movies.totalCount - 1;
            let itemsPerRow = this.itemsPerRow;

            if(itemsPerRow === 0) {
                itemsPerRow = this.getItemsPerRow();
            }

            console.log("##################### this.itemsPerRow", itemsPerRow);

            switch(KEYMAP[keycode]) {
                case "UP" : {
                    if(newIndexActiveMovie == -1) {
                        newIndexActiveMovie = 0;
                    } else if (newIndexActiveMovie > itemsPerRow - 1) {
                        newIndexActiveMovie = newIndexActiveMovie - itemsPerRow;
                    }

                    break;
                }
                case "DOWN" : {
                    if(newIndexActiveMovie == -1) {
                        newIndexActiveMovie = 0;
                    } else if(newIndexActiveMovie < maxIndex - itemsPerRow + 1) {
                        newIndexActiveMovie = newIndexActiveMovie + itemsPerRow;
                    }
                    break;
                }
                case "RIGHT" : {
                    console.log("right");
                    (newIndexActiveMovie < maxIndex) ? newIndexActiveMovie++ : newIndexActiveMovie=maxIndex;
                    break;
                }
                case "LEFT" : {
                    console.log("left");
                    (newIndexActiveMovie > 0) ? newIndexActiveMovie-- : newIndexActiveMovie=0;
                    break;
                }
                case "ENTER" : {
                    const movieId = this.props.movies.entries[newIndexActiveMovie].id;
                    browserHistory.push(`/movie/${movieId}`);
                    break;
                }
            }

            console.log("newIndexActiveMovie", newIndexActiveMovie);
            this.props.actions.updateIndexActiveMovie(newIndexActiveMovie);
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
                                       indexActiveMovie={movies.indexActiveMovie}>
                                       ref={movie.id}
    						</MovieTile>
    					)
	                })
                }
			</ul>
		)
	}
};


// maps
const mapStateToProps = function (state) {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(Movies, dispatch)
  }
}

// Connect
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
