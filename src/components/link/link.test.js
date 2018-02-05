import React from 'react';
import { expect } from 'chai';

import Enzyme from '../../utils/enzyme';

import Link from './index';

describe('<Link/>', () => {
    const children = 'Hello';
    const href = '/href';

    it('render', () => {
        const style = {padding: '20px'};
        const addedPropsOne = 'propsOne';
        const addedPropsTwo = 6;

        const wrapper = Enzyme.shallow(
            <Link
                href={href}
                style={style}
                addedPropsOne={addedPropsOne}
                addedPropsTwo={addedPropsTwo}
            >
                {children}
            </Link>
        );

        expect(wrapper.props().href).to.equal(href);
        expect(wrapper.props().style).to.equal(style);
        expect(wrapper.props().addedPropsOne).to.equal(addedPropsOne);
        expect(wrapper.props().addedPropsTwo).to.equal(addedPropsTwo);
    });

    it('renders an `.link`', () => {
        const wrapper = Enzyme.shallow(
            <Link href={href}>
                {children}
            </Link>
        );

        expect(wrapper.find('.link')).to.have.length(1);
    });

    it('renders children when passed in', () => {
        const wrapper = Enzyme.shallow(
            <Link href={href}>
                {children}
            </Link>
        );

        expect(wrapper.contains(children)).to.equal(true);
    });
});
