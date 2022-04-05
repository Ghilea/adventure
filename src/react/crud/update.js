import React from 'react';

const Update = (url, data) => {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
    });
}

export default Update;