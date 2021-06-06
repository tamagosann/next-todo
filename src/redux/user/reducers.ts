import * as Actions from './actions'
import initialState from '../store/initialState'

export const UserReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case Actions.SET_USER_ACTION:
            return {
                ...state,
                uid: action.payload.uid,
                isSignedIn: action.payload.isSignedIn,
                username: action.payload.username
            };
        case Actions.DELETE_USER_ACTION:
            return {
                ...state,
                uid: action.payload.uid,
                isSignedIn: action.payload.isSignedIn,
                username: action.payload.username
            };
        default:
            return state
    }
}