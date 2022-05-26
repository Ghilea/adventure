import React, { useState, useEffect, useRef } from 'react';
import { map } from '@comp/store';
import { fetchSocketURL } from '@shared/global';
import { useKey } from 'rooks';

export const Chat = ({name}) => {

    const storeMap = map(state => state);

    const ws = useRef(null);
    const inputRef = useRef(null);

    useEffect(()=>{
        ws.current = new WebSocket(`ws://${fetchSocketURL}/websockets`);
    }, [])
    
    const [chatMessage, setChatMessage]= useState([])

    const [textInput, SetTextInput] = useState('');

    useEffect(()=>{
        let messageId = 0;

        ws.current.onmessage = (message) => {
            const output = JSON.parse(message.data);
            
            setChatMessage(chatMessage => ([
                ...chatMessage,
                <p key={output.message.name+messageId}><span>{output.message.name}: </span>{output.message.message}</p>
            ]))
            messageId++;
        };
    }, [ws.current])
        
    const openChatInput = (event) => {
        event.preventDefault();

        if(storeMap.chatInput){
            storeMap.disableCamera(false)
            if (textInput.length > 0) {
                ws.current.send(JSON.stringify({"name":name,"message": textInput}));
            }
            SetTextInput('');
            inputRef.current.value = '';
            storeMap.openChat(false);
            inputRef.current.blur();
            storeMap.closeChatWindow(true);
        }else{
            storeMap.disableCamera(true)
            storeMap.openChat(true);
            storeMap.closeChatWindow(false);

            setTimeout(() => {
                inputRef.current.focus();
            }, 300)
        }
        
    }

    useKey(['Enter'], openChatInput);

    return (
        <>               
            <div className = {
                `chat ${(storeMap.chatWindow) ? 'fadeOut' : ''}`
            } >
                {
                    chatMessage                
                }
            </div>

            <input id = 'chatInput' className = {`chatInput ${(!storeMap.chatInput) ? 'hide' : ''}`} type = 'text'
                ref = {
                    inputRef
                }
                onChange = {
                    (e) => SetTextInput(e.target.value)
            } />
 
        </>
    )
}