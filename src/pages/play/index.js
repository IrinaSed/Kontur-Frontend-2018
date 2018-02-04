import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { reverseCard, closeAllCards, changeScore, addOpenCards } from '../../redux/actions/play';

import { getArray } from '../../utils/play';
import Card from '../../components/card';
import Nav from '../../components/nav';

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

    state = {
        pictures: [],
        isDisabled: true,
        currentOpen: null,
    };

    componentWillMount() {
        this.setState({ pictures: getArray() }, () => {
            setTimeout(() => {
                this.props.closeAllCards();
                this.setState({ isDisabled: false });
            }, 5000);
        });
    }

    render() {
        const { score, openCards } = this.props;
        console.log(this.state);
        console.log(this.props);

        if (openCards.length === 18) {
            return <Redirect to="/end"/>
        }

        return (
            <div>
                <Nav score={score}/>
                {[0, 6, 12].map(begin => this.renderRow(begin))}
            </div>
        );
    }

    renderRow(begin) {
        const { cards, openCards } = this.props;
        const { pictures } = this.state;

        return (
            <div className="cards-row" key={begin}>
                {pictures.slice(begin, begin + 6).map((picture, index) =>
                    <Card
                        key={index + begin}
                        className={openCards.includes(index + begin) ? 'hidden': ''}
                        picture={`/image/${picture}.png`}
                        isBack={cards[index + begin]}
                        onClick={() => this.handleClick(index + begin)}
                    />
                )}
            </div>
        )
    }

    handleClick = id => {
        const { reverseCard, changeScore, addOpenCards, openCards } = this.props;
        const { currentOpen, isDisabled, pictures } = this.state;

        if ( !isDisabled ) {
            if ((currentOpen || currentOpen === 0) && !openCards.includes(id) && currentOpen !== id) {
                reverseCard(id);
                this.setState({ isDisabled: true });
                setTimeout(() => {
                    if (pictures[currentOpen] === pictures[id]) {
                        addOpenCards([id, currentOpen]);
                    } else {
                        reverseCard(id);
                        reverseCard(currentOpen);
                    }

                    changeScore(pictures[currentOpen] === pictures[id]);
                    this.setState({ currentOpen: null, isDisabled: false });
                }, 500);
            } else {
                if ( currentOpen !== id) {
                    reverseCard(id);
                    this.setState({ currentOpen: id });
                }
            }
        }
    };
}

const mapDispatchToProps = { reverseCard, closeAllCards, changeScore, addOpenCards };

const mapStateToProps = state => ({
    ...state.play
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
