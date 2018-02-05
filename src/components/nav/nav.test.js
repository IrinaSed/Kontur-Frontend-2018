import React from 'react';
import { expect } from 'chai';

import Enzyme  from '../../utils/enzyme';

import Nav from './index';

describe('<Nav/>', () => {
    const score = 13;

    it('render', () => {
        const wrapper = Enzyme.shallow(
            <Nav score={score}/>
        );

        expect(wrapper.hasClass('nav')).to.equal(true);
    });

    it('renders play again button component', () => {
        const wrapper = Enzyme.shallow(
            <Nav score={score}/>
        );

        const button = wrapper.find('a').get(0);

        expect(button.props.href).to.equal('/play');
        expect(button.props['data-tid']).to.equal('Menu-newGame');
    });

    it('renders score', () => {
        const wrapper = Enzyme.shallow(
            <Nav score={score} />
        );

        expect(wrapper.text()).to.contain(score.toString());
    });
});
