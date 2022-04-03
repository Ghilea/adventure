import React, {
    useEffect,
    useState
} from 'react';

const Update = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'data':data
        })
    });
}

export default Update;