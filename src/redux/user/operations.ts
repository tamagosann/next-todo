import firebase from '../../../lib/db';
import { auth } from '../../../lib/db';
import { deleteUserAction, setUserAction } from './actions'
import { resetTodoAction } from '../todos/actions'
import { Dispatch } from 'react';
import { Action } from 'redux';
import { InitialState, User } from '../store/initialstate';
import { NextRouter } from 'next/dist/client/router';

export const signIn = ():(dispatch: Dispatch<Action>, getState: () => InitialState) => Promise<void> => {
    return async (dispatch: Dispatch<Action>, getState: () => InitialState) => {
        const google_auth_provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithRedirect(google_auth_provider);
    }
}

export const signOut = (): (dispatch: Dispatch<Action>, getState: () => InitialState) => Promise<void> => {
    return async (dispatch: Dispatch<Action>, getState: () => InitialState) => {
        auth.signOut();
        dispatch(deleteUserAction({
            uid: undefined,
            username: '',
            isSignedIn: false,
        }))
        dispatch(resetTodoAction([]))
    }
}

export const listenAuthState = (router: NextRouter):(dispatch: Dispatch<Action>) => Promise<firebase.Unsubscribe> => {
    return async (dispatch: Dispatch<Action>) => {
        return auth.onAuthStateChanged(user => {
            if(user) {
                const uid = user.uid;
                const username = user.displayName;
                const loginUser: User = {
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