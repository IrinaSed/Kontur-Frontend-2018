import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

export default class extends React.PureComponent {
    static propTypes = {
        score: PropTypes.number.isRequired,
    };

    render() {
        const { score } = this.props;

        return (
            <div className="nav">
                <Link className="nav__button" to="/play">Начать заново</Link>
                <p className="nav__score">Очки: {score}</p>
            </div>
        );
    }
}
