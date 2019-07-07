const initialState = {
    isLoading: true,
    data: []
}

export default category = (state = initialState, action) => {
    switch(action.type){

        //GET
        case 'GET_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }

        //POST
        case 'ADD_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'ADD_CATEGORY_FULLFILED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }

        default:
            return state
    }
}