const isProduction = false;

const port = 4000;
const link = `http://denniskarlssondesign.com:${port}`
const local = `http://localhost:${port}`

const linkWs = `denniskarlssondesign.com:${port}`
const localWs = `localhost:${port}`


export const fetchURL = (isProduction) ? link : local;

export const fetchSocketURL = (isProduction) ? linkWs : localWs;