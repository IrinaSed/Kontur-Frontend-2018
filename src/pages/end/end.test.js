import React from 'react';
import { expect } from 'chai';

import Enzyme from '../../utils/enzyme';

import End from './end';
import Link from '../../components/link';

describe('<End/>', () => {
    const score = 5;

    it('render', () => {
        const wrapper = Enzyme.shallow(
            <End score={score}/>
        );

        expect(wrapper.find('.end')).to.have.length(1);
        expect(wrapper.find('.end__picture')).to.have.length(1);
        expect(wrapper.find('.end__title-game').get(0).props.children).to.includes(score);
    });

    it('render contain to link', () => {
        const wrapper = Enzyme.shallow(
            <End score={score}/>
        );
        const link = wrapper.find(Link).get(0);

        expect(wrapper.find(Link)).to.have.length(1);
        expect(link.props['data-tid']).to.equal('EndGame-retryGame');
        expect(link.props.href).to.equal('/play');
        expect(link.props.children).to.equal('Ещё раз');
    });
});

