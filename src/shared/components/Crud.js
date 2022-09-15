import axios from 'axios';

/*export const Read = async (url) => {
    const data = await fetch(url);
    return await data.json();
}*/

export const Read = async (url) => {
    try {
        const promise = await axios.get(url);
        return promise
    }catch(error) {
        console.error('error', error)
    }
}

export const Create = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data
        })
    });
}

export const Update = (url, data) => {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data
        })
    });
}