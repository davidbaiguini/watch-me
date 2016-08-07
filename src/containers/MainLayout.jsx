import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Header} from 'components/header/header.jsx';
import * as Movies from 'actions/movies.jsx'


export default class MainLayout extends Component {
    componentWillMount () {
        this.props.actions.loadMovies();
    }
    render () {
        return (
            <main className="">
                <Header />
                {this.props.children}
            </main>
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
    actions: bindActionCreators(Movies, dispatch)
  }
}

// Connect
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
