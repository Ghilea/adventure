import React, { useEffect, useState } from "react";
import { menu } from '@comp/store'

export const Loading = ({loadTime}) => {

    const storeMenu = menu(state => state);

    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const arr = [
            'Still faster than Windows update.',
            'Does Anyone Actually Read This?',
            "Hitting Your Keyboard Won't Make This Faster"
        ]

        setMessage(arr[Math.floor(Math.random() * arr.length)])

    }, [])

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, loadTime);

        setTimeout(() => {
            storeMenu.isLoadingDone(true)
        }, loadTime + 3000);

    }, [])

    return (
        <div className={`loadingScreen ${(!loading) ? 'fadeOut' : ''}`}>
            <h1>Loading...</h1>
            <p>{message}</p>
        </div>
    )
}