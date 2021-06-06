import { createSelector } from 'reselect';

const UserSelector = (state) => state.user;

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