import { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Read } from '@comp/crud';
import { menu, player, loading } from '@store/store';
import Ground from '@comp/ground';
import { Physics } from '@react-three/cannon';
import Button from '@comp/button/buttons';
import { Canvas } from '@react-three/fiber';
import LoadModel from '@models/components/models';
import Loader from '@comp/loading/loader';
import './index.scss';

const Index = () => {

    const navigate = useNavigate();

    const isLoading = loading(state => state.isLoading)
    const storeMenu = menu(state => state);
    const storePlayer = player(state => state);

    const [characterList, setCharacterList] = useState([]);
    const [build, setBuild] = useState([]);

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

    useLayoutEffect(() => {
        let ignore = false;

        const startFetching = async () => {

            const json = await Read(`getLevel?id=${'Menu_character'}`)

            if (!ignore) {

                //reset
                setBuild([])

                //get data
                const parsed = JSON.parse(json.data[0].content)

                //loop and set data
                parsed.objects.map((use, index) => {

                    setBuild((state) => ([
                        ...state,
                        <LoadModel key={use.type + index} position={use.position} rotation={use.rotation} type={use.type} />
                    ]))
                })

                setBuild((state) => ([
                    ...state,
                    <Ground key={'groundMenuCharacter'} position={[0, 0, 0]} size={parsed.ground}
                    />
                ]))

                setBuild((state) => ([
                    ...state,
                    <LoadModel key={'showProtagonist'} type={'knight'} />
                ]))
            }
        }

        startFetching();

        return () => {
            ignore = true;
        }

    }, [])

    useEffect(() => {
        let ignore = false;

        const startFetching = async () => {

            const json = await Read(`getAllProtagonist`)
            
            if (!ignore) {

                //reset
                setCharacterList([])

                //loop and set data
                json.data.map((item, index) => {

                    setCharacterList((state) => ([
                        ...state,
                        <div
                            key={item.name + index}
                            className='flex-col place-row-1-4 p-5 my-4 rounded-md select-character'
                            onClick={handleCharacterLogin}>
                            <div className='flex flex-col justify-evenly gap-4'>
                                <h2>{item.name}</h2>
                                <p>Level: {item.level}</p>
                            </div>
                        </div>
                    ]))
                })
            }
        }

        startFetching();

        return () => {
            ignore = true;
        }

    }, [])

    return (
        <>
            <Canvas shadows className='bg-black'
                camera={{
                    fov: 60,
                    position: [0, 1, -5.8]
                }}>

                <Physics gravity={[0, -30, 0]} >
                    <Suspense fallback={<Loader />}>
                        {build}
                    </Suspense >
                </Physics>

            </Canvas>
            {!isLoading ? <div className='fixed pos-left pos-top grid template-col-5 template-row-5 justify-items-center items-center h-full w-full pt-5 pr-5'>
                <div className='flex-col place-row-1-4 place-col-5-1 h-full w-full'>
                    {characterList}
                </div>
                <div className='flex-row place-row-5-1 place-col-3-1 gap-5 h-full w-full items-center mb-8 px-5'>
                    <Button
                        className='bg-black texture-bg text-size-4 button'
                        onClick={handleCreate}>
                        Create Protagonist
                    </Button>
                </div>
                <div className='flex-row place-row-5-1 place-col-5-1 gap-5 h-full w-full items-end mb-8 px-5'>
                    <Button
                        className='bg-black texture-bg text-size-4 button'
                        onClick={() => handleExit()}>
                        Exit
                    </Button>
                </div>

            </div> : null}

        </>

    )
}

export default Index