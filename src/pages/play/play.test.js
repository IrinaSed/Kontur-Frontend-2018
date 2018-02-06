import React from 'react';
import { expect } from 'chai';
import { Redirect } from 'react-router';

import Enzyme from '../../utils/enzyme';

import Play from './play';
import Nav from '../../components/nav';
import Card from '../../components/card';

describe('<Play/>', () => {
    const cards = { ...new Array(18).fill(true) };
    const score = 19;
    const reverseCard = () => {};
    const closeAllCards = () => {};
    const changeScore = () => {};
    const addOpenCards = () => {};

    it('render', () => {
        const openCard = [];
        const wrapper = Enzyme.shallow(
            <Play
                cards={cards}
                score={score}
                openCards={openCard}
                reverseCard={reverseCard}
                closeAllCards={closeAllCards}
                changeScore={changeScore}
                addOpenCards={addOpenCards}
            />
        );

        expect(wrapper.get(0).props['data-tid']).to.equal('Deck');
        expect(wrapper.find(Nav).get(0).props.score).to.equal(score);
        expect(wrapper.find('.cards-row')).to.length(3);
        expect(wrapper.find(Card)).to.length(18);
    });

    it('render redirect', () => {
        const openCard = new Array(18);
        const wrapper = Enzyme.shallow(
            <Play
                cards={cards}
                score={score}
                openCards={openCard}
                reverseCard={reverseCard}
                closeAllCards={closeAllCards}
                changeScore={changeScore}
                addOpenCards={addOpenCards}
            />
        );

        expect(wrapper.find(Redirect)).to.length(1);
        expect(wrapper.find(Redirect).get(0).props.to).to.equal('/end');
    });

    it('five second check', done => {
        let elapsed = 0;
        const openCard = [];
        const wrapper = Enzyme.shallow(
            <Play
                cards={cards}
                score={score}
                openCards={openCard}
                reverseCard={reverseCard}
                closeAllCards={closeAllCards}
                changeScore={changeScore}
                addOpenCards={addOpenCards}
            />
        );

        const interval = setInterval(() => {
            let isDisabled = wrapper.state('isDisabled');
            let originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;

            if (!isDisabled) {
                done.fail('Card must be disabled');
            } else {
                elapsed++;
            }

            if (elapsed === 5) {
                clearInterval(interval);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
                done()
            }
        }, 900);
    });
});
