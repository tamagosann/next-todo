import { User } from "../store/initialstate";


export const SET_USER_ACTION = 'SET_USER_ACTION';

export const setUserAction = (user: User): Readonly<{
    type: "SET_USER_ACTION",
    payload: User
}> => {
    return {
        type: SET_USER_ACTION,
        payload: user,
    }
}

export const DELETE_USER_ACTION = 'DELETE_USER_ACTION';

export const deleteUserAction = (user: User): Readonly<{
    type: "DELETE_USER_ACTION",
    payload: User
}> => {
    return {
        type: DELETE_USER_ACTION,
        payload: user,
    }
}

