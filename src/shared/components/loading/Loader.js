import React, { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
import { menu } from '@comp/store';
import { fetchURL } from '@shared/components/global';
import axios from 'axios';
import './LoadingScreen.scss';

export const Loader = () => {

    const storeMenu = menu(state => state);
    const {progress} = useProgress();
    const [data, setData] = useState(null);
    
    const url = `${fetchURL}/loadingTip`;

    useEffect(() => {
        
        axios.get(url)
        .then((response) => {
            const getData = response.data[0].sentence;
            setData(getData);
        })
        
    }, [])

    useEffect(()=>{
        if(progress >= 100){
            storeMenu.isLoadingDone(true);
        }
    }, [progress])

    return (
        <Html className="loadingScreen" position={[0,0]}>
            <h1>Loading...</h1>
            <p>{Number.parseFloat(progress).toFixed(0)} %</p>
            <p className={'tip'}>{data}</p>
        </Html>
    )
}