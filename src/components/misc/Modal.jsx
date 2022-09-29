import { useEffect, useState } from "react";
import './Modal.scss';

export const Modal = ({children, open, title}) => {

    return (
        <dialog open={open}>
            <h2>{title}</h2>
            <p>{children}</p>
        </dialog>
    )
}