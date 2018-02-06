import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { getArray } from '../../utils/play';
import Card from '../../components/card';
import Nav from '../../components/nav';

import './index.css';

export default class extends React.PureComponent {
    static propTypes = {
        cards: PropTypes.objectOf(PropTypes.bool).isRequired,
        score: PropTypes.number.isRequired,
        openCards: PropTypes.arrayOf(PropTypes.number).isRequired,

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

        if (openCards.length === 18) {
            return <Redirect to="/end"/>
        }

        return (
            <div data-tid="Deck">
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
        const { reverseCard, changeScore, addOpenCards } = this.props;
        const { currentOpen, isDisabled, pictures } = this.state;

        if (isDisabled || currentOpen === id) {
            return;
        }

        reverseCard(id);

        if (Number.isFinite(currentOpen)) {
            this.setState({ isDisabled: true });

            setTimeout(() => {
                if (pictures[currentOpen] === pictures[id]) {
                    addOpenCards([id, currentOpen]);
                } else {
                    reverseCard(id);
                    reverseCard(currentOpen);
                }

                changeScore(pictures[currentOpen] === pictures[id]);
            }, 500);
            setTimeout(() => {
                this.setState({ currentOpen: null, isDisabled: false });
            }, 600);
        } else {
            this.setState({currentOpen: id});
        }
    };
}
