import React, {useEffect, useState} from 'react';
import axios from "axios";

let getData = (url) => {
    return fetch(url)
        .then(data => data.json())
}

const setItem = (url) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
    })
    .then(data => data.json())
}
    
export default getData;