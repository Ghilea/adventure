import React from 'react';
import './index.scss';

const Index = ({children, open, title}) => {

    return (
        <dialog open={open}>
            <h2>{title}</h2>
            <p>{children}</p>
        </dialog>
    )
}

export default Index