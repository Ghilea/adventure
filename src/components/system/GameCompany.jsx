import { useEffect, useState } from "react";
import './GameCompany.scss';

const GameCompany = () => {

    const [company, setCompany] = useState([]);
    
    useEffect(() => {
        setCompany([{
            name: 'testName',
            show: 'testShow',
            timer: 10
        }])
    }, [])

    return (
        <>
            {company.map((item, index) => {
                return <div key={item + index} className={`gameCompany ${setTimeout(() => {'companyFadeOut'}, 2000) }`}>
                    <p>{item.name}</p>
                </div>
            })}
        </>
    )
}

export default GameCompany;