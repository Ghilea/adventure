import React from 'react';

const Read = (url) => {
    return fetch(url).then(data => data.json())
}

export default Read;