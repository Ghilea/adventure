import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import Protagonist from './protagonist'

const getEnemy = () => {
    //let getProtagonist;

    /*setTimeout(() => {
        getProtagonist = < Protagonist />
    }, 3000);*/

    return (
        <div className='enemy'>
            <img className='skull' src='assets/images/fantasy_gui_png/button_10_s03.png' />
            <p className='skull_p'>En fiende uppenbarade sig. Var redo för strid eller fly för ditt liv.</p>
            <img className='skull_2' src='assets/images/fantasy_gui_png/button_10_s03.png' />
        </div>
    )
}

export default getEnemy;