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

        return (
            <div
                className={`flip flip_${isBack ? 'front' : 'back'}`}
                data-tid={isBack ? 'Card-flipped' : 'Card'}
            >
                <div className="flipper">
                    <div
                        className={`card card__front ${className}`}
                        style={{ backgroundImage: `url(${picture})` }}
                        onClick={onClick}
                    />
                    <div
                        className={`card card__back ${className}`}
                        style={{ backgroundImage: 'url(image/back.png)' }}
                        onClick={onClick}
                    />
                </div>
            </div>
        );
    }
}
