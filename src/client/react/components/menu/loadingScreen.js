import React, { useEffect, useState } from "react";

export const LoadingScreen = () => {

    const [message, setMessage] = useState(null);

    useEffect(() => {
        
        const arr = [
            'Still faster than Windows update.',
            'Does Anyone Actually Read This?',
            "Hitting Your Keyboard Won't Make This Faster"
        ]

        setMessage(arr[Math.floor(Math.random() * arr.length)])

    }, [])

    return (
        <div className="loadingScreen">
            <h1>Loading...</h1>
            <p>{message}</p>
        </div>
    )
}