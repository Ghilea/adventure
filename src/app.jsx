import { useEffect, useState } from 'react';
import GameCompany from '@comp/system/GameCompany';
import Content from '@comp/canvas/content';

export const App = () => {
    
    const contentHandler = (data) =>{
        console.log(data)
        setContent(<Content />);
    }

    const [content, setContent] = useState(<GameCompany timer={1000} func={contentHandler}>TestCompany</GameCompany>);

    return (
        <>
            {content}
        </>
    )
}