import { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
import { Read } from '@comp/crud';
import { loading } from '@store/store';
import './index.scss';

const Loader = () => {

    const store = loading(state => state);
    const {progress} = useProgress();
    const [data, setData] = useState(null);

    useEffect(()=>{
        if (progress <= 0 && data === null) {
            Read('loadingTip').then(response => setData(response.data[0].sentence))
        }

        if(progress === 100){
            store.setIsLoading(false)
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

export default Loader