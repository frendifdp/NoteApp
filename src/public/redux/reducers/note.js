const initialState = {
    isLoading: true,
    isFinish: false,
    data: []
}

export default note = (state = initialState, action) => {
    switch (action.type){

        //GET
        case 'GET_NOTE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data.data,
                loaded: [...state.data, ...action.payload.data.data],
                max: action.payload.data.totalPage
            }
        //POST
        case 'ADD_NOTE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'ADD_NOTE_FULLFILED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        //PUT
        case 'EDIT_NOTE_PENDING':
            return {
                ...state,
                isLoading: true,
            }
        case 'EDIT_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'EDIT_NOTE_FULLFILED':
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                data: action.payload.data.data
            }
        //DELETE
        case 'DELETE_NOTE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'DELETE_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'DELETE_NOTE_FULLFILED':
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                data: action.payload.data
            }
        default:
            return state;
    }
}