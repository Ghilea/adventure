import React from 'react';
import useSound from 'use-sound';
import buttonHover from '@assets/sounds/buttons/button2.mp3';

const Button = ({
    children,
    type,
    alt,
    img = null,
    className,
    imgClassName,
    onClick
}) => {

    const [play] = useSound(buttonHover, {
        volume: 0.5
    });

    return (
        <button
            type='button'
            className={className}
            onClick={onClick}
            data-tooltip={type}
            onMouseEnter={() => play()}
            category={type}>
            {!img || <img
                src={img}
                className={imgClassName}
                category={type}
                alt={`Show ${alt} button`} />}
            {children}
        </button>
    )
}

export default Button