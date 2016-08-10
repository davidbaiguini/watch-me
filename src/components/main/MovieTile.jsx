import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';
import moment from 'moment';

import * as MoviesActions from 'actions/movies.jsx';

class MovieTile extends Component {

    constructor(props) {
		super(props);
		this.movie = this.props.data;
		this.movie.url = `/movie/${this.movie.id}`;
		this.publishedDate = moment(this.movie.publishedDate).format('YYYY');
	}

    handleHover(e) {
        this.props.actions.updateIndexActiveMovie(this.props.index);
    }

	render() {
		let classes = classNames(
			'grid__item one-half mobile--one-third tablet--one-quarter desktop--one-fifth wide--one-sixth movie-tile', {
				'active': this.props.indexActiveMovie === this.props.index
			}
		);
		return (
			<li className={classes} onMouseEnter={this.handleHover.bind(this)}>
				<Link to={this.movie.url}>
					<figure className="movie-tile__figure">
						<div className="img-placeholder">
							<img src={this.movie.images[0].url}
								alt={this.movie.title}
								className="movie-tile__img img-placeholder__img"
							/>
						</div>
						<figcaption className="movie-tile__caption">
							<div className="movie-tile__title">
								{this.movie.title}
							</div>
							<div className="movie-tile__published-date">
								{this.publishedDate}
							</div>
						</figcaption>
					</figure>
				</Link>
			</li>
		)
	}
}

// Maps
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(MoviesActions, dispatch)
    }
}

// Connect
export default connect(null, mapDispatchToProps)(MovieTile);
