import * as Actions from './actions'
import initialState from '../store/initialState'

export const TodosReducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case Actions.ADD_TODO:
            return {
                ...state,
                todos: [...action.payload],
            };
        case Actions.DELETE_TODO:
            return {
                ...state,
                todos: [...action.payload],
            };
        case Actions.CHANGE_TODO_PROGRESS_ACTION:
            return {
                ...state,
                todos: [...action.payload],
            };
        case Actions.FETCH_TODOS_ACTION:
            return {
                ...state,
                todos: [...action.payload]
            };
        case Actions.UPDATE_TODOS_ACTION:
            return {
                ...state,
                todos: [...action.payload]
            };
        case Actions.RESET_DATA:
            return {
                ...state,
                todos: [...action.payload]
            };
        case Actions.RESET_TODO_ACTION:
            return {
                ...state,
                todos: []
            };
        default:
            return state
    }
}