import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

export default class extends React.PureComponent {
    static propTypes = {
        text: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        style: PropTypes.object,
    };

    static defaultProps = {
        style: {},
    };

    render() {
        const { text, to, style } = this.props;

        return (
            <Link className="link" style={style} to={to}>{text}</Link>
        );
    }
}
