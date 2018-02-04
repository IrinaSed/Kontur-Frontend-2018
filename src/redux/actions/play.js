import { createAction } from 'redux-actions';

export const REVERSE_CARD = 'REVERSE_CARD';
export const reverseCard = createAction(REVERSE_CARD);

export const CLOSE_ALL_CARDS = 'CLOSE_ALL_CARDS';
export const closeAllCards = createAction(CLOSE_ALL_CARDS);

export const ADD_OPEN_CARDS = 'ADD_OPEN_CARDS';
export const addOpenCards = createAction(ADD_OPEN_CARDS);

export const CHANGE_SCORE = 'CHANGE_SCORE';
export const changeScore = createAction(CHANGE_SCORE);
