import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import baseURL from '../baseUrl';

const CancelToken = axios.CancelToken;

// config timeout
axios.defaults.timeout = 30 * 1000;

// config cookie
// axios.defaults.withCredentials = true;

// config request header
axios.defaults.headers.post['Content-Type'] = 'application/json';

// config base url
axios.defaults.baseURL = baseURL.prod;

const pending: any[] = [];
const removePending = (config: any) => {
    for(const p in pending) {
        if(pending[p].u === config.url + '&' + config.method) {
            pending[p].f();
            pending.splice(parseInt(p, 10), 1);
        }
    }
}

//config request interceptors
axios.interceptors.request.use((config) => {
    removePending(config);
    config.cancelToken = new CancelToken((c) => {
        pending.push({
            u: config.url + '&' + config.method,
            f: c
        })
    })
    return config
},(err) => {
    Promise.reject(err)
});

//config response interceptors