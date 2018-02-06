import React from 'react';
import { expect } from 'chai';

import * as play from './play';

describe('play actions', () => {
    const payload = 1;

    it('reverseCard', () => {
        const action = play.reverseCard(payload);

        expect(action.type).to.equal(play.REVERSE_CARD);
        expect(action.payload).to.equal(payload);
    });

    it('closeAllCards', () => {
        const action = play.closeAllCards(payload);

        expect(action.type).to.equal(play.CLOSE_ALL_CARDS);
        expect(action.payload).to.equal(payload);
    });

    it('addOpenCards', () => {
        const action = play.addOpenCards(payload);

        expect(action.type).to.equal(play.ADD_OPEN_CARDS);
        expect(action.payload).to.equal(payload);
    });

    it('changeScore', () => {
        const action = play.changeScore(payload);

        expect(action.type).to.equal(play.CHANGE_SCORE);
        expect(action.payload).to.equal(payload);
    });
});
