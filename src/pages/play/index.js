import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { reverseCard, closeAllCards, changeScore, addOpenCards } from '../../redux/actions/play';

import PlayPage from './play';
import './index.css';

class Play extends React.PureComponent {
    static propTypes = {
        cards: PropTypes.objectOf(PropTypes.bool).isRequired,
        score: PropTypes.number.isRequired,
        openCards: PropTypes.arrayOf(PropTypes.number),

        reverseCard: PropTypes.func.isRequired,
        closeAllCards: PropTypes.func.isRequired,
        changeScore: PropTypes.func.isRequired,
        addOpenCards: PropTypes.func.isRequired,
    };

    render() {
        return (
            <PlayPage { ...this.props }/>
        );
    }
}

const mapDispatchToProps = { reverseCard, closeAllCards, changeScore, addOpenCards };

const mapStateToProps = state => ({
    ...state.play
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
