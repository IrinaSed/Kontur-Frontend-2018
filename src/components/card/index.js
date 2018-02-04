import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class extends React.PureComponent {
    static propTypes = {
        picture: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        className: PropTypes.string,
        isBack: PropTypes.bool,
    };

    static defaultProps = {
        className: '',
        isBack: false,
    };

    render() {
        const { picture, isBack, onClick, className } = this.props;
        const image = isBack ? 'image/test-card.jpg' : picture;

        return (
            <div
                className={`card ${className}`}
                style={{ backgroundImage: `url(${image})` }}
                onClick={onClick}
            />
        );
    }
}
