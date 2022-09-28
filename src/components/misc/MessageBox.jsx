import { useEffect, useState } from "react";
import { message } from '@comp/store';
import './MessageBox.scss';

export const MessageBox = ({children}) => {

    const store = message(state => state);

    useEffect(() => {
        if(store.visible) {
            setTimeout(() => {
                store.setMessage(false)
            }, 1500);
        }
    }, [store.visible])

    return (
        <>
            {store.visible ? <div className="messageBox">{children}</div> : <></>}
        </>
    )
}