import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class extends React.PureComponent {
    static propTypes = {
        score: PropTypes.number.isRequired,
    };

    render() {
        const { score } = this.props;

        return (
            <div className="nav">
                <a className="nav__button" href="/play" data-tid="Menu-newGame">
                    Начать заново
                </a>
                <p className="nav__score">
                    Очки:
                    <span className="nav__score_value" data-tid="Menu-scores">
                        {score}
                    </span>
                </p>
            </div>
        );
    }
}
