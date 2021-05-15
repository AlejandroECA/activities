import actionTypes  from "./action.types";

export const SignIn= (user) => ({
    type: actionTypes.LOGIN,
    payload: user
})

export const logOut = () => ({
    type: actionTypes.LOGOUT
})

