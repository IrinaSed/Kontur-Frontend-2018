import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EndPage from './end';

class End extends React.PureComponent {
    static propTypes = {
        score: PropTypes.number.isRequired,
    };

    render() {
        return (
            <EndPage score={this.props.score}/>
        );
    }
}

const mapStateToProps = state => ({
    score: state.play.score
});

export default connect(mapStateToProps)(End);
