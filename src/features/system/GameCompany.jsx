import { useEffect, useState } from "react";
import './GameCompany.scss';

const GameCompany = ({children, timer, func}) => {

    const [fade, setFade] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setFade(true)
        }, timer)
    }, [])

    useEffect(() => {
        if(fade){
            func(fade)
        }
    }, [fade])

    return (
        <div className='gameCompany'>
            <p className={`${fade ? 'companyFadeOut' : 'companyFadeIn'}`}>{children}</p>
        </div>
    )
}

export default GameCompany;