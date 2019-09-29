import React from 'react';
import { SECOND } from './Square';
import { first, second } from './Avatar';

export const Status = (props) => {
    const nextPlayerImg = props.next === SECOND ? first : second;
    const statusImg = props.winner
        ? (props.winner === SECOND
            ? first
            : second)
        : nextPlayerImg;

    const statusText = props.winner ? 'Winner: ' : 'Next player: ';

    return (
        <div className='status'>
            {statusText}
            <img className='icon' src={statusImg} alt='' />
        </div>
    );
}
