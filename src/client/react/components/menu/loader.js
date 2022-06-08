import React, { useEffect, useState, useRef} from "react";
import { Html, useProgress } from "@react-three/drei";
import { menu } from '@comp/store';
import { Read } from '@/shared/components/Crud';
import { fetchURL } from '@shared/components/global';

export const Loader = () => {

    const storeMenu = menu(state => state);
    const {progress} = useProgress();
    const [message, setMessage] = useState(null);

    useEffect(()=>{
        if(progress >= 100){
            storeMenu.isLoadingDone(true);
        }
    }, [progress])

    useEffect(() => {

        console.log('mess', message);
        if(message === null) {
            storeMenu.isLoadingDone(false);
            
            const url = `${fetchURL}/loadingTip`;

            Read(url)
            .then(items => {
                if (items.result.length > 0) {
                    console.log(items.result[0].sentence)
                    setMessage(items.result[0].sentence)
                }
            })
        }

    }, [])

    return (
        <Html position={[0,0]}>
            <div className = {'loadingScreen'}>
                <h1>Loading...</h1>
                <p>{Number.parseFloat(progress).toFixed(0)} %</p>
                <p className={'tip'}>{message}</p>
            </div>
        </Html>
    )
}