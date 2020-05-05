import axios from 'axios';

const basePath = process.env.REACT_APP_API_URL;


export default async function <T>(options: any): Promise<T> {

    const client = axios.create({
        baseURL: basePath,
        responseType: "json"
    });

    const onSuccess = function (response: any) {
        console.debug('Request Successful!', response);
        return response.data;
    }

    const onError = function (error: any) {
        console.debug('Request Failed:', error.config);
        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.debug('Status:', error.response.status);
            console.debug('Data:', error.response.data);
            console.debug('Headers:', error.response.headers);
        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.debug('Error Message:', error.message);
        }
        return Promise.reject(error.response || error.message);
    }

    axios.interceptors.response.use(
        (response: any) => response && response.data,
        (error: any) => error && error.response && error.response.data
    );



    return client(options)
        .then(onSuccess)
        .catch(onError);
}