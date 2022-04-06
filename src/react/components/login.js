import React, {useContext} from 'react';
import Interface from './interface';
import Content from './content';
import {StoreContext, StoreProvider} from './store'
import Buttons from './buttons';
import Protagonist from './protagonist';
import Music from './music';

const Login = () => {

    const [store, setStore] = useContext(StoreContext);

    return (

        <>
        {
            (store.login === false) ? 
                <>
                <Protagonist />
                <Music url={'assets/music/menu.mp3'} />
                </>
            :
                <>
                <Interface />
                <Content />
                <Buttons />
                </>
        }
        </>
        
    )
}

export default Login;