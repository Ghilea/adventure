import React from 'react';
import './index.scss';

const Input = ({
    type = 'text',
    className,
    onChange,
    placeholder
}) => {

    return (
        <input
            type={type}
            className={`p-2 rounded-lg bg-black text-white ${className}`}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default Input