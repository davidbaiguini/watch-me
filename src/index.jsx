import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';

import MainLayout from 'containers/MainLayout.jsx';
import Movie from 'containers/Movie.jsx';
import Recent from 'containers/Recent.jsx';
import MoviesList from 'containers/MoviesList.jsx';
import store from 'store/store.jsx'

require('scss/main.scss');

export class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
					<Route path="/" component={MainLayout} >
						<IndexRoute component={MoviesList} />
						<Route path="movie/:movieId" component={Movie} />
						<Route path="recent" component={Recent} />
					</Route>
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById("myApp"));
