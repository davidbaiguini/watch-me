import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

export default class MovieTile extends Component {
	constructor(props) {
		super(props)
		this.movie = this.props.data;
		this.movie.url = `/movie/${this.movie.id}`;
	}
	render() {
		let classes = classNames(
			'grid__item one-half mobile--one-third tablet--one-quarter desktop--one-fifth wide--one-sixth movie-tile', {
				'active': this.props.indexActiveMovie === this.props.index
			}
		);
		return (
			<li className={classes} >
				<Link to={this.movie.url}>
					<figure className="movie-tile__figure">
						<img src={this.movie.images[0].url}
							 alt={this.movie.title}
							 className="movie-tile__img"
						/>
						<figcaption className="movie-tile__caption">
							<div className="movie-tile__title">
								{this.movie.title}
							</div>
							<div className="movie-tile__published-date">
								{this.movie.publishedDate}
							</div>
						</figcaption>
					</figure>
				</Link>
			</li>
		)
	}
}
