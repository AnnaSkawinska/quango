import React from 'react';
import { SECOND } from './Square';

export const Status = (props) => {

    console.log('Status render');

    const nextPlayerImg = props.next === SECOND ? props.avatars[0] : props.avatars[1];
    const statusImg = props.winner
        ? (props.winner === SECOND
            ? props.avatars[0]
            : props.avatars[1])
        : nextPlayerImg;

    const statusText = props.winner ? 'Winner: ' : 'Next player: ';

    return (
        <div className='status'>
            {statusText}
            <img className='icon' src={statusImg} alt='' />
        </div>
    );
}
