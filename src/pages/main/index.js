import React from 'react';
import Link from '../../components/link';

import './index.css';

export default class extends React.PureComponent {
    render() {
        return (
            <div className="main">
                <div className="main__picture" style={{ backgroundImage: `url(${'image/start.png'})` }}/>
                <p className="main__title-game">MEMORY GAME</p>
                <Link to="/play">Начать игру</Link>
            </div>
        );
    }
}
