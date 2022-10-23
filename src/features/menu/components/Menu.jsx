import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@comp/button/buttons';
import { appWindow } from "@tauri-apps/api/window";
import logoImg from '@assets/images/svg/celtic.svg';

const Menu = () => {

    const navigate = useNavigate();

    const handleClick = async (e) => {

        const target = e.target.attributes.category.value;

        switch (target) {
            case 'view':
                navigate('/view-character');
                break;
            case 'options':
                navigate('/view-options');
                break;
            case 'exit':
                appWindow.close()
                break;
            case 'editor':
                navigate('/editor');
                break;
        }
    }

    return (
        <div className='fixed pos-left pos-top grid template-row-3 template-col-5 h-full w-full'>
            
            <div className='flex flex-col items-start justify-end place-row-3-1 place-col-1-1 ml-10 mb-10 gap-1'>
                <img className='game-logo pl-5' src={logoImg} alt='Game logo'/>
                <h1 className='text-size-6 flex justify-center items-start'>Adventure</h1> 
            </div>

            <div className='flex flex-col justify-center items-center gap-6 place-row-3-1 place-col-4-2 mr-5'>
                <Button
                    className='text-white text-size-7 hover'
                    type='view'
                    onClick={handleClick}>
                    Start Game
                </Button>

                <Button
                    className='text-white text-size-7 hover'
                    type='options'
                    onClick={handleClick}>
                    Options
                </Button>

                <Button
                    className='text-white text-size-7 hover'
                    type='editor'
                    onClick={handleClick}>
                    Map Editor
                </Button>

                <Button
                    className='text-white text-size-7 hover'
                    type='exit'
                    onClick={handleClick}>
                    Exit Game
                </Button>
            </div>
            
        </div>
    )
}

export default Menu