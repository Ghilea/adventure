import React, { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
import { menu } from '@comp/store';
import { Read } from '@shared/components/Crud';
import './loader.scss';

export const Loader = ({ menuFunc }) => {

    const storeMenu = menu(state => state);
    const {progress} = useProgress();
    const [data, setData] = useState(null);

    useEffect(() => {
        Read('loadingTip').then(response => setData(response.data[0].sentence))
    }, [])

    useEffect(()=>{
        if(progress >= 100){
            menuFunc(true);
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