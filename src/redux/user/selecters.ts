import { createSelector } from 'reselect';
import { InitialState, User } from '../store/initialstate';

const UserSelector = (state: InitialState): User => state.user;

export const getIsSignedIn = createSelector(
    [UserSelector],
    state => state.isSignedIn
)

export const getUsername = createSelector(
    [UserSelector],
    state => state.username
)

export const getUid = createSelector(
    [UserSelector],
    state => state.uid
)