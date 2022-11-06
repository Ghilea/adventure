import { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei'
import { Read } from '@comp/crud';
import { menu, player } from '@store/store';
import Ground from '@comp/ground';
import { Physics } from '@react-three/cannon';
import Button from '@comp/button/buttons';
import { Canvas } from '@react-three/fiber';
import LoadModel from '@models/components/models';
import Loader from '@comp/loading/loader';
import './index.scss';

const Index = () => {

    const navigate = useNavigate();

    const storeMenu = menu(state => state);
    const storePlayer = player(state => state);

    const [characterList, setCharacterList] = useState([]);
    const [viewCharacter, setViewCharacter] = useState([]);

    const handleCharacterLogin = () => {
        storeMenu.activateContent('login')
        storePlayer.setPlayerId(storePlayer.id);
        navigate('/level');
    }

    const handleCreate = () => {
        navigate('/create-character');
    }

    const handleExit = () => {
        navigate('/menu');
    }

    useEffect(() => {

        if(characterList.length <= 0){
            Read('getAllProtagonist').then(response => (

                response.data.map((item, index) => {
                    return (
                        setCharacterList((state) => ([
                            ...state,
                            <div
                                key={item.name + index} 
                                className='flex-col place-row-1-4 p-5 my-4 select-character' 
                                onClick={handleCharacterLogin}>
                                <div className='flex-row justify-between'>
                                    <h2>{item.name}</h2>
                                    <p>Level: {item.level}</p>
                                </div>
                            </div>
                        ])),

                        setViewCharacter(
                            <div className='flex-col bg-black place-row-1-4'>
                                <Canvas shadows
                                    camera={{
                                        fov: 64,
                                        position: [0, 0.5, 2]
                                    }}>
                                   
                                    
                                    <OrbitControls />
                                    <Physics gravity={[0, -30, 0]} >
                                        <Suspense fallback={<Loader />}>
                                            <LoadModel type={'knight'} />
                                            <Ground size={[8]} transparent={true} opacity={0} position={[0,-1,0]}/>
                                            <LoadModel type={'floor_1'} position={[0, 1, 0]}/>
                                            <LoadModel type={'floor_1'} position={[1, 1, 0]} />
                                            <LoadModel type={'floor_1'} position={[-1, 1, 0]} />

                                            <LoadModel type={'floor_1'} position={[0, 1, -1]} />
                                            <LoadModel type={'floor_1'} position={[1, 1, -1]} />
                                            <LoadModel type={'floor_1'} position={[-1, 1, -1]} />

                                            <LoadModel type={'floor_1'} position={[-1, 1, -2]} />
                                            <LoadModel type={'floor_1'} position={[1, 1, -2]} />
                                            <LoadModel type={'floor_1'} position={[0, 1, -2]} />

                                            <LoadModel type={'floor_1'} position={[1, 1, -3]} />
                                            <LoadModel type={'floor_1'} position={[-1, 1, -3]} />
                                            <LoadModel type={'floor_1'} position={[0, 1, -3]} />

                                            <LoadModel type={'floor_1'} position={[-2, 1, -1]} />
                                            <LoadModel type={'floor_1'} position={[2, 1, -1]} />

                                            <LoadModel type={'wall_1'} position={[2, 1, -1]} />
                                            <LoadModel type={'wall_1'} position={[-2, 1, -1]} />

                                            <LoadModel type={'torch'} position={[1, 1, 1]} rotation={[0, Math.PI * (-180 / 360), 0]} />
                                            <LoadModel type={'torch'} position={[-1, 1, 1]} rotation={[0,Math.PI * (180/360), 0]}/>

                                            <LoadModel type={'torch'} position={[-1, 1, -3]} rotation={[0, Math.PI * (180 / 360), 0]} />
                                        </Suspense >
                                    </Physics>
                                    
                                </Canvas>
                            </div>
                        )

                    )
                })

            ));
        }
       
    }, [])

    return (    
        <div className='grid template-col-5 template-row-4 justify-items-center items-center'>
            <div className='flex-col bg-black texture-bg shadow place-row-1-4 place-col-5-1 h-full w-full'>
                {characterList}
            </div>
            <div className='flex-col place-row-1-4 place-col-1-4 h-full w-full'>
                {viewCharacter}
            </div>
            <div className='flex flex-row place-row-4-1 place-col-5-1 gap-5 h-full w-full items-end mb-8 px-5'>
                <Button
                    className='bg-black texture-bg text-size-4 button'
                    onClick={handleCreate}>
                    Create Protagonist
                </Button>
                <Button
                    className='bg-black texture-bg text-size-4 button'
                    onClick={() => handleExit()}>
                    Exit
                </Button>
            </div>
            
        </div>    
    )
}

export default Index