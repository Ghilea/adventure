import { useEffect, useState } from "react";
import './MessageBox.scss';

export const MessageBox = ({children}) => {

 
    return (
        <div className="messageBox">{children}</div>
    )
}