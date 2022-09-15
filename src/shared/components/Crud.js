import axios from 'axios';

/*export const Read = async (url) => {
    const data = await fetch(url);
    return await data.json();
}*/

export const Read = async (url) => {
    try {
        const promise = await axios.get(`http://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_PORT}/${url}`);
        return promise
    }catch(error) {
        console.error('Crud-Read-Error', error)
    }
}

/*export const Create = (url, data) => {
    return fetch(`http://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_PORT}/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data
        })
    });
}*/

export const Create = async (url, data) => {
    try {
        await axios.post(`http://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_PORT}/${url}`, data);
    }catch(error){
        console.error('Crud-Create-Error', error)
    }
}

/*export const Update = (url, data) => {
    return fetch(`http://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_PORT}/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data
        })
    });
}*/

export const Update = async (url, data) => {
    try {
        await axios.put(`http://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_PORT}/${url}`, data);
    } catch (error) {
        console.error('Crud-Update-Error', error)
    }
}