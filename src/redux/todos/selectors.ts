import { createSelector } from 'reselect';
import { InitialState } from '../store/initialstate';

const todosSelector = (state: InitialState) => state.todos;

export const getTodos = createSelector(
    [todosSelector],
    state => state.todos
)