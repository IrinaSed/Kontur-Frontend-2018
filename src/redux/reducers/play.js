import { handleActions } from 'redux-actions';

import { REVERSE_CARD, CLOSE_ALL_CARDS, CHANGE_SCORE, ADD_OPEN_CARDS } from '../actions/play';

const initialState = {
    cards: {...new Array(18).fill(false)},
    openCards: [],
    score: 0,
};

export default handleActions({
    [REVERSE_CARD]: (state, {payload}) => ({
        ...state,
        cards: {
            ...state.cards,
            [payload]: !state.cards[payload],
        },
    }),

    [CLOSE_ALL_CARDS]: (state, {payload}) => ({
        ...state,
        cards: {...new Array(18).fill(true)},
    }),

    [ADD_OPEN_CARDS]: (state, {payload}) => ({
        ...state,
        openCards: state.openCards.concat(payload),
    }),

    [CHANGE_SCORE]: (state, {payload}) => ({
        ...state,
        score: payload ?
            state.score + 42 * ((18 - state.openCards.length) / 2) :
            state.score - 42 * (state.openCards.length / 2)
    }),
}, initialState);
