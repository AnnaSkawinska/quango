import React from 'react';

export const FIRST = 'w';
export const SECOND = 'b';

export const Square = (props) => {
    const img = props.value === FIRST
        ? props.avatars[1]
        : (props.value === SECOND ? props.avatars[0] : undefined);

    const backgroundStyle = {
        background: props.background
    }
    return (
        <button style={backgroundStyle} className='square' >
            <img src={img} className='pawn' alt='' onClick={props.onClick} />
        </button>
    );
}
