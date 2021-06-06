import firebase from '../../../lib/db';
import { auth } from '../../../lib/db';
import { deleteUserAction, setUserAction } from './actions'
import { resetTodoAction } from '../todos/actions'

export const signIn = () => {
    return async (dispatch, getState) => {
        console.log('きてる');
        const google_auth_provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithRedirect(google_auth_provider);

    }
}

export const signOut = () => {
    return async (dispatch, getState) => {
        console.log('きてる');
        auth.signOut();
        dispatch(deleteUserAction({
            uid: null,
            username: '',
            isSignedIn: false,
        }))
        dispatch(resetTodoAction({}))
    }
}

export const listenAuthState = (router) => {
    return async (dispatch) => {
        return auth.onAuthStateChanged(user => {
            console.log(user)
            if(user) {
                const uid = user.uid;
                const username = user.displayName;
                const loginUser = {
                    uid: uid,
                    isSignedIn: true,
                    username: username,
                }
                dispatch(setUserAction(loginUser));
                if(router.pathname === '/login') {
                    router.push('/')
                }
            } else {
                router.push('/login')
            }
        })
    }
}