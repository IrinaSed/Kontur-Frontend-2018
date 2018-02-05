import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';

import Enzyme from '../../utils/enzyme';

import Card from './index';

describe('<Card/>', () => {
    const nop = () => {};
    const picture = 'picture';

    it('renders front size', () => {
        const wrapper = Enzyme.shallow(
            <Card
                onClick={nop}
                picture={picture}
            />
        );

        expect(wrapper.find('.card__front')).to.have.length(1);
        expect(wrapper.find('.card__back')).to.have.length(1);
        expect(wrapper.find('.card')).to.have.length(2);

    });

    it('renders front size', () => {
        const className = 'className';
        const backgroundImage = `url(${picture})`;

        const wrapper = Enzyme.shallow(
            <Card
                onClick={nop}
                picture={picture}
                className={className}
                isBack
            />
        );
        const front = wrapper.find('.card__front').get(0);

        expect(front.props.className).to.contain(className);
        expect(front.props.style.backgroundImage).to.equal(backgroundImage);
        expect(wrapper.hasClass('flip flip_front')).to.equal(true);
    });

    it('renders back size', () => {
        const className = 'className';
        const backgroundImage = 'url(image/back.png)';

        const wrapper = Enzyme.shallow(
            <Card
                picture={picture}
                onClick={nop}
                className={className}
                isBack={false}
            />
        );
        const back = wrapper.find('.card__back').get(0);

        expect(back.props.className).to.contain(className);
        expect(back.props.style.backgroundImage).to.equal(backgroundImage);
        expect(wrapper.hasClass('flip flip_back')).to.equal(true);
    });

    it('calls onClick', () => {
        const onClick = sinon.spy();
        const wrapper = Enzyme.shallow(
            <Card
                picture={picture}
                onClick={onClick}
                isBack={false}
            />
        );

        wrapper.find('.card__back').simulate('click');
        wrapper.find('.card__front').simulate('click');

        expect(onClick).to.have.property('callCount', 2);
    });
});
