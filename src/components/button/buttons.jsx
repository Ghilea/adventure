import React, { useEffect, useState, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import useAudio from '@hooks/useAudio';
import buttonHover from '@assets/sounds/button.mp3';
import { Create } from '@comp/crud';

const Button = ({
    children, 
    type, 
    alt, 
    img = null, 
    className,
    imgClassName, 
    onClick
}) => {

    const [play] = useAudio(buttonHover)

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