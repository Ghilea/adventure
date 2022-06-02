import React, { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
import { menu } from '@comp/store';

export const Loader = () => {

    const storeMenu = menu(state => state);
    const { progress } = useProgress();
    const [message, setMessage] = useState(null);

    useEffect(()=>{
        if(progress >= 100){
            storeMenu.isLoadingDone(true);
        }
    }, [progress])

    useEffect(() => {
        storeMenu.isLoadingDone(false);

        const arr = [
            'Still faster than Windows update.',
            'Does Anyone Actually Read This?',
            "Hitting Your Keyboard Won't Make This Faster"
        ]

        setMessage(arr[Math.floor(Math.random() * arr.length)])

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