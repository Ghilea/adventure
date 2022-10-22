import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Read } from '@comp/crud';
import { menu, player } from '@store/store';
import Button from '@comp/button/buttons';
import { Canvas } from '@react-three/fiber';
import FemaleAvatar from '@models/avatar/female_avatar';
import './index.scss';

const Index = () => {

    const navigate = useNavigate();

    const storeMenu = menu(state => state);
    const storePlayer = player(state => state);

    const [characterList, setCharacterList] = useState([]);
    const [viewCharacter, setViewCharacter] = useState([]);

    const handleLogin = (id) => {
        storeMenu.activateContent('login')
        storePlayer.setPlayerId(id);
        navigate('/level');
    }

    const handleExit = () => {
        navigate('/menu');
    }

    useMemo(() => {
        Read('getAllProtagonist').then(response => (
      
            response.data.map((item, index) => {
                return (
                    setCharacterList((state) => ([
                        ...state,
                        <div key={item.name + index} className = 'flex-col gradient place-row-1-4 p-5 my-4' >
                            <div className='flex-row justify-between'>
                                <h2>{item.name}</h2>
                                <p>Level: {item.level}</p>
                            </div>
                        </div>
                    ])),

                    setViewCharacter(
                    <div className='flex-col gradient place-row-1-4'>
                        <Canvas shadows 
                            camera={{
                                fov: 40,
                                position: [0, 0, 1]
                            }}>
                            <ambientLight intensity={1} />
                            <FemaleAvatar />
                        </Canvas>
                    </div>
                    )

                )
            })
            
        ));
    }, [])

    return (    
        <div className='view-character grid template-col-3 template-row-4 justify-items-center items-center'>
            <div className='flex-col bg-primary place-row-1-4 place-col-3-3 h-full w-full'>
                {characterList}
            </div>
            <div className='flex-col gradient place-row-1-4 place-col-1-2 h-full w-full'>
                {viewCharacter}
            </div>
            <Button
                className='button place-row-4-4 place-col-3-3'
                onClick={() => handleExit()}>Exit</Button>
        </div>    
    )
}

export default Index