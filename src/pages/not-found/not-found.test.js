import React from 'react';
import { expect } from 'chai';

import Enzyme from '../../utils/enzyme';

import NotFound from './index';

describe('<NotFound/>', () => {
    it('render', () => {
        const wrapper = Enzyme.shallow(
            <NotFound/>
        );

        expect(wrapper.hasClass('not-found')).to.equal(true);
        expect(wrapper.find('.not-found')).to.have.length(1);
        expect(wrapper.text()).to.equal('404 Not Found');
    });
});
