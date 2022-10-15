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
            case 'create':
                navigate('/create-character');
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
        <div className='menuContainer'>
            
            <header>
                <img className='logo' src={logoImg} alt='logo'/>

                <h1>Adventure</h1> 
            </header>
            
            <div className='buttonList'>
                <Button
                    className='button'
                    type='view'
                    onClick={handleClick}>
                    Start Game
                </Button>

                <Button
                    className='button'
                    type='create'
                    onClick={handleClick}>
                    Create Protagonist
                </Button>

                <Button
                    className='button'
                    type='options'
                    onClick={handleClick}>
                    Options
                </Button>

                <Button
                    className='button'
                    type='editor'
                    onClick={handleClick}>
                    Map Editor
                </Button>

                <Button
                    className='button'
                    type='exit'
                    onClick={handleClick}>
                        Exit Game
                </Button>
            </div>
            
        </div>
    )
}

export default Menu