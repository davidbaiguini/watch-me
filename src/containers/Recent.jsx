import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';

import * as MoviesActions from 'actions/movies.jsx'
import MovieTile from 'components/main/MovieTile.jsx'

export default class Player extends Component {

    componentDidMount() {}

    render () {
        return (
            <div className="grid">
                Recently played
            </div>
        )
    }
};

// // maps
// const mapStateToProps = function (state) {
//   return {
//     movies: state.movies
//   }
// }
//
// const mapDispatchToProps = function (dispatch) {
//   return {
//     actions: bindActionCreators(MoviesActions, dispatch)
//   }
// }
//
// // Connect
// export default connect(mapStateToProps, mapDispatchToProps)(Player)
