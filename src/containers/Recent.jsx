import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';

import * as MoviesActions from 'actions/movies.jsx';
import MovieTile from 'components/main/MovieTile.jsx';


// var RecentComponent = React.createClass({
class RecentComponent extends Component {

    componentDidMount() {}

    render () {
        return (
            <div className="">
                Recently played: Sorry about that
            </div>
        )
    }
};

// Export connected module
export default connect(
    state => ({
        movies: state.movies
    }),
    dispatch => bindActionCreators(MoviesActions, dispatch)
)(RecentComponent)
