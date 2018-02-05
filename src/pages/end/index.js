import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Link from '../../components/link';

import './index.css';

class End extends React.PureComponent {
    static propTypes = {
        score: PropTypes.number.isRequired,
    };

    render() {
        return (
            <div className="end">
                <div className="end__picture" style={{ backgroundImage: `url(${'image/end.png'})` }}/>
                <p className="end__title-game">
                    Поздравляем!<br/>Ваш итоговый счёт: {this.props.score}
                </p>
                <Link
                    data-tid="EndGame-retryGame"
                    href="/play"
                    style={{padding: "10px 30px"}}
                >
                    Ещё раз
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    score: state.play.score
});

export default connect(mapStateToProps)(End);
