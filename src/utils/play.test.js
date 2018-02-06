import { expect } from 'chai';

import { getArray, getUniqueRandomArray } from './play';

describe('getArray', () => {
    it('each card twice', () => {
        const array = getArray();

        expect(array.reduce((prev, cur) =>
            prev ^ cur
        )).to.equal(0);
    });
});

describe('getUniqueRandomArray', () => {
    it('each card is unique', () => {
        const array = getUniqueRandomArray();

        expect(array.length).to.equal([...new Set(array)].length);
    });
});
