import axios from 'axios';

const IP = 'http://192.168.100.38:4000';

export const getNote = (search, sort, page) => {
    let query = '?'
    if(search !== ''){
        query += 'search=' + search + '&'
    }
    if(sort !== ''){
        query += 'sort=' + sort + '&'
    }
    if(page !== ''){
        query += 'page=' + page + '&'
    }
    return {
        type: 'GET_NOTE',
        payload: axios.get(IP+'/notes'+query)
    }
}

export const addNote = (data) => {
    return {
        type: 'ADD_NOTE',
        payload: axios.post(IP+'/note', data)
    }
}

export const editNote = (id, data) => {
    return {
        type: 'EDIT_NOTE',
        payload: axios.put(IP+'/note/'+id, data)
    }
}

export const delNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        payload: axios.delete(IP+'/note/'+id)
    }
}