import React from 'react';
import {Link} from 'react-router';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Header</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recent">Recently played</Link></li>
                </ul>
            </header>
        );
    }
}
