import React from 'react';
import {Link} from 'react-router';

export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__title">Watch Me</h1>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><Link to="/">Home</Link></li>
                        <li className="nav__item"><Link to="/recent">Recently played</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
