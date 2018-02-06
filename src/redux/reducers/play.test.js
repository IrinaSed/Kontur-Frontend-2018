import React from 'react';
import { expect } from 'chai';

import play from './play';
import * as playActions from '../actions/play';

describe('play reducer', () => {
    it('REVERSE_CARD', () => {
        const payload = 1;
        const state = {
            cards: { [payload]: true },
        };

        expect(play(state, playActions.reverseCard(payload)).cards[payload])
            .to.equal(false);
    });

    it('CLOSE_ALL_CARDS', () => {
        const newCards = play({}, playActions.closeAllCards()).cards;

        expect(Object.keys(newCards).length).to.equal(18);
        expect(Object.values(newCards).every(x => x)).to.equal(true);
    });

    it('ADD_OPEN_CARDS', () => {
        const state = { openCards: [8, 9] };
        const cards = [1, 3, 4];

        expect(play(state, playActions.addOpenCards(cards)).openCards.length)
            .to.equal(cards.length + state.openCards.length);
    });

    it('CHANGE_SCORE', () => {
        const testData = [{
            state: {score: 252, openCards: new Array(4).fill(1)},
            payload: true,
            result: 546,
        }, {
            state: {score: 252, openCards: new Array(4).fill(1)},
            payload: false,
            result: 168,
        }, {
            state: {score: 0, openCards: []},
            payload: false,
            result: 0,
        }, {
            state: {score: 42, openCards: new Array(18).fill(1)},
            payload: true,
            result: 42,
        }, {
            state: {score: 42, openCards: new Array(16).fill(1)},
            payload: false,
            result: -294,

        }];

        testData.forEach(test =>
            expect(
                play(
                    test.state,
                    playActions.changeScore(test.payload))
                .score
            ).to.equal(test.result)
        );
    });
});
