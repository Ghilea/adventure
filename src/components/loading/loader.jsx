import { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
import { Read } from '@comp/crud';
import { loading } from '@store/store';
import './index.scss';

const Loader = () => {

    const store = loading(state => state);
    const { progress } = useProgress();
    const [data, setData] = useState(null);

    useEffect(() => {
        let ignore = true;

        const startFetching = async () => {

            const json = await Read('loadingTip')
        
            if (!ignore) {

                //reset
                store.setIsLoading(true)

                //get data
                setData(json.data[0].sentence)
            }
        }

        startFetching();

        return () => {
            ignore = true;
        }

    }, [])

    useEffect(() => {
        if (progress >= 50) {
            store.setIsLoading(false)
        }

    }, [progress])

    return (
        <Html className="loadingScreen" position={[0, 0]}>
            <h1>Loading...</h1>
            <p>{Number.parseFloat(progress).toFixed(0)} %</p>
            <p className={'tip'}>{data}</p>
        </Html>
    )
}

export default Loader