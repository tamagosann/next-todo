export const ADD_TODO = "ADD_TODO";

export const addTodoAction = (todos) => {
    console.log(todos)
    return {
        type: ADD_TODO,
        payload: todos,
    }
}

export const DELETE_TODO = "DELETE_TODO";

export const deleteTodoAction = (todos) => {
    return {
        type: DELETE_TODO,
        payload: todos,
    }
}

export const CHANGE_TODO_PROGRESS_ACTION = 'CHANGE_TODO_PROGRESS_ACTION'

export const changeTodoProgressAction = (todos) => {
    return {
        type: CHANGE_TODO_PROGRESS_ACTION,
        payload: todos,
    }
}

export const FETCH_TODOS_ACTION = 'FETCH_TODOS_ACTION';

export const fetchTodosAction = (todos) => {
    return {
        type: FETCH_TODOS_ACTION,
        payload: todos,
    }
}

export const UPDATE_TODOS_ACTION = 'UPDATE_TODOS_ACTION';

export const updateTodosAction = (todos) => {
    return {
        type: UPDATE_TODOS_ACTION,
        payload: todos,
    }
}

export const RESET_DATA = 'RESET_DATA';

export const resetDataAction = (todos) => {
    return {
        type: RESET_DATA,
        payload: todos,
    }
}

export const RESET_TODO_ACTION = 'RESET_TODO_ACTION';

export const resetTodoAction = (todos) => {
    return {
        type: RESET_TODO_ACTION,
        payload: todos,
    }
}
