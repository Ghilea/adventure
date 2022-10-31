import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@comp/button/buttons';
import Input from '@comp/input/input-field';
import { appWindow } from "@tauri-apps/api/window";
import logoImg from '@assets/images/svg/celtic.svg';
import menuMusic from '@assets/music/menu/menu3.mp3';
import useSound from 'use-sound';
import './index.scss';

const Menu = () => {

    const [play] = useSound(menuMusic, {
        volume: 0.4,
        loop: true
    });

    const navigate = useNavigate();

    const handleClick = async (e) => {

        const target = e.target.attributes.category.value;

        switch (target) {
            case 'login':
                play();
                navigate('/menu');
                break;
            case 'options':
                navigate('/menu');
                break;
            case 'exit':
                appWindow.close()
                break;
        }
    }

    return (
        <div className='bg-login fixed pos-left pos-top grid template-row-3 template-col-1 h-full w-full'>
            
            <div className='flex flex-col items-center justify-center place-row-2-1 place-col-1-1 gap-1'>
                <img className='game-logo' src={logoImg} alt='Game logo'/>
                <h1 className='text-size-6 flex justify-center items-center'>Adventure</h1> 
            
                <div className='flex flex-col justify-end items-end gap-6 place-row-1-1 place-col-1-1 mt-5'>
                    <Input placeholder='email@email.com'/>
                    <Input type='password' placeholder='******'/>

                    <div className='flex flex-row justify-evenly w-full'>
                        <Button
                            className='text-white text-size-7'
                            type='login'
                            onClick={handleClick}>
                            Login
                        </Button>

                        <Button
                            className='text-white text-size-7'
                            type='signup'
                            onClick={handleClick}>
                            Signup
                        </Button>
                    </div>
                    
                </div>
            </div>

            <Button
                className='place-row-3-1 flex items-end justify-end text-white text-size-7 mb-5 mr-5'
                type='exit'
                onClick={handleClick}>
                Exit game
            </Button>
        </div>
    )
}

export default Menu