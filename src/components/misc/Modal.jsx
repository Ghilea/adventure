import { useEffect, useState } from "react";
import './Modal.scss';

export const Modal = ({children, open}) => {
    console.log(open)
    const [modal, setModal] = useState(open);

    /*useEffect(() => {
        
        if(modal) {
            setTimeout(() => {
                setModal(false)
            }, 1500);
        }
    }, [modal])*/

    return (
        <dialog open={true}>
            <h2>Modal</h2>
            <p>{children}</p>
        </dialog>
    )
}