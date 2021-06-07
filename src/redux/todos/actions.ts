import { Todo } from "./type";

export const ADD_TODO = "ADD_TODO";

export const addTodoAction = (todos: Todo[] | []):Readonly<{
    type: "ADD_TODO",
    payload: Todo[] | []
}> => {
    console.log(todos)
    return {
        type: ADD_TODO,
        payload: todos,
    }
}

export const DELETE_TODO = "DELETE_TODO";

export const deleteTodoAction = (todos: Todo[] | []):Readonly<{
    type: "DELETE_TODO",
    payload: Todo[] | []
}> => {
    return {
        type: DELETE_TODO,
        payload: todos,
    }
}

export const CHANGE_TODO_PROGRESS_ACTION = 'CHANGE_TODO_PROGRESS_ACTION'

export const changeTodoProgressAction = (todos: Todo[] | []):Readonly<{
    type: "CHANGE_TODO_PROGRESS_ACTION",
    payload: Todo[] | []
}> => {
    return {
        type: CHANGE_TODO_PROGRESS_ACTION,
        payload: todos,
    }
}

export const FETCH_TODOS_ACTION = 'FETCH_TODOS_ACTION';

export const fetchTodosAction = (todos: Todo[]):Readonly<{
    type: "FETCH_TODOS_ACTION",
    payload: Todo[] | []
}>  => {
    return {
        type: FETCH_TODOS_ACTION,
        payload: todos,
    }
}

export const UPDATE_TODOS_ACTION = 'UPDATE_TODOS_ACTION';

export const updateTodosAction = (todos: Todo[] | []):Readonly<{
    type: "UPDATE_TODOS_ACTION",
    payload: Todo[] | []
}>   => {
    return {
        type: UPDATE_TODOS_ACTION,
        payload: todos,
    }
}

export const RESET_DATA = 'RESET_DATA';

export const resetDataAction = (todos: Todo[] | []):Readonly<{
    type: "RESET_DATA",
    payload: Todo[] | []
}> => {
    return {
        type: RESET_DATA,
        payload: todos,
    }
}

export const RESET_TODO_ACTION = 'RESET_TODO_ACTION';

export const resetTodoAction = (todos: Todo[] | []):Readonly<{
    type: "RESET_TODO_ACTION",
    payload: Todo[] | []
}> => {
    return {
        type: RESET_TODO_ACTION,
        payload: todos,
    }
}
