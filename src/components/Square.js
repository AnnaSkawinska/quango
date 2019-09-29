import React from 'react';

import { first, second } from './Avatar';

export const FIRST = 'w';
export const SECOND = 'b';

export const Square = (props) => {
    const img = props.value === FIRST
        ? second
        : (props.value === SECOND ? first : undefined);

    const backgroundStyle = {
        background: props.background
    }
    return (
        <button style={backgroundStyle} className='square' >
            <img src={img} className='pawn' alt='' onClick={props.onClick} />
        </button>
    );
}
