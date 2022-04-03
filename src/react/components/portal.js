import React from 'react';

const Portal = () => {

    document.querySelector('body').style.backgroundImage = `url(assets/images/vandrar.jpg)`;

    return (
        <p className='main_text'>
            <img className='cr' src='assets/images/fantasy_gui_png/frame_02_03.png' />
            <img className='cl' src='assets/images/fantasy_gui_png/frame_02_04.png' />
            <img className='ctl' src='assets/images/fantasy_gui_png/frame_02_03.png' />
            <img className='ctr' src='assets/images/fantasy_gui_png/frame_02_04.png' />
            Du tycker om att se nya platser, men som ibland verkar vara väldigt lik de andra platserna du besökt. Det är lite deja vu över det.
        </p>
    )

}

export default Portal;