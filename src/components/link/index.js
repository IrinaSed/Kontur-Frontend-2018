import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class extends React.PureComponent {
    static propTypes = {
        children: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        style: PropTypes.object,
    };

    static defaultProps = {
        style: {},
    };

    render() {
        const { children, href, style, ...rest } = this.props;

        return (
            <a
                className="link"
                style={style}
                href={href}
                {...rest}
            >
                {children}
            </a>
        );
    }
}
