import React from 'react';
import { expect } from 'chai';

import Enzyme from '../../utils/enzyme';

import Main from './index';
import Link from '../../components/link';

describe('<Main/>', () => {
    it('render', () => {
        const wrapper = Enzyme.shallow(
            <Main/>
        );

        expect(wrapper.find('.main')).to.have.length(1);
        expect(wrapper.find('.main__picture')).to.have.length(1);
        expect(wrapper.find('.main__title-game')).to.have.length(1);
    });

    it('render contain to link', () => {
        const wrapper = Enzyme.shallow(
            <Main/>
        );
        const link = wrapper.find(Link).get(0);

        expect(wrapper.find(Link)).to.have.length(1);
        expect(link.props.href).to.equal('/play');
        expect(link.props['data-tid']).to.equal('NewGame-startGame');
        expect(link.props.children).to.equal('Начать игру');
    });
});
