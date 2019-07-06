import axios from 'axios';

const IP = 'http://192.168.100.38:4000';

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(IP+'/categories')
    }
}

export const addCategory = (data) => {
    return {
        type: 'ADD_CATEGORY',
        payload: axios.post(IP+'/category', data)
    }
}