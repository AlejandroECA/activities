import actionTypes from './action.types'



export const initialState = {
    user:""
}

export const globalStoreReducer =(state, action) => {
    switch (action.type){
        case actionTypes.LOGIN:
            return{
                ...state,
                user: action.payload
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                user:""
            }
        default:
            return state
    }
}