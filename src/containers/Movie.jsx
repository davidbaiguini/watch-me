import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import _ from 'lodash';

import * as MoviesActions from 'actions/movies.jsx';

class Player extends Component {
    // componentDidMount() {}
    // componentDidMount () {}
    onStart() {
        this.props.actions.playMovie(this.props.params.movieId);
    }
    render () {
        let videoUrl = "",
            title = "";
        const movies = this.props.movies.entries;

        if(movies.length > 0) {
            const movie = _.find(movies, {id: this.props.params.movieId});
            videoUrl = movie.contents[0].url;
            title = movie.title;
        }

        return (
            <div className="movie">
                <h2 className="movie__title">{title}</h2>
                <ReactPlayer url={videoUrl}
                             controls={true}
                             onStart={this.onStart.bind(this)}
                             width="100%"
                             height="100%"
                 />
            </div>
        )
    }
};

// Maps
const mapStateToProps = function (state) {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(MoviesActions, dispatch)
  }
}

// Connect
export default connect(mapStateToProps, mapDispatchToProps)(Player)
