import { Dispatch } from "react";
import { Action } from "redux";
import { db, FirebaseTimestamp } from "../../../lib/db";
import { addTodoAction, changeTodoProgressAction, deleteTodoAction, fetchTodosAction, updateTodosAction, resetDataAction } from "./actions"
import { InitialState } from '../store/initialstate'
import { Todo } from "./type";


export const addTodo = (todoName: string, detail: string, chargedBy: string, deadline: string): (dispatch: Dispatch<Action>, getState: () => InitialState) => Promise<false | undefined> => {
    return async (dispatch: Dispatch<Action> , getState: () => InitialState) => {
        if(todoName === '' || detail === '' || chargedBy === '' || deadline === '' ) {
            alert('入力項目に空欄があります。ご確認の上、もう一度入力してください。');
            return false;
        }
        let todos: Todo[] = getState().todos.todos
        const uid = getState().user.uid;

        let num: string;

        if(todos.length > 0) {
            num = todos.length.toString();
        } else {
            num = '0';
        }

        const timestamp = FirebaseTimestamp.now();
        
        const dateToString = (date: Date): string => {
            return date.getFullYear() + '-'
                + ('00' + (date.getMonth() + 1)).slice(-2) + '-'
                + ('00' + date.getDate()).slice(-2)
        };

        const startDate: string = dateToString(timestamp.toDate())

        const addedTodo = {
            num: num,
            todoName,
            detail,
            chargedBy,
            deadline,
            startDate: startDate,
            progress: 0            
        }

        db.collection('users').doc(uid).collection('todos').add(addedTodo)
            .then((doc) => {
                const todoId = doc.id;
                const todoToStore: Todo = {
                    ...addedTodo,
                    todoId,
                };
                todos.push(todoToStore)
                dispatch(addTodoAction(todos))
            })

    }
}

type OperationReturn = ReturnType<typeof addTodo>

export const deleteTodo = (todoId: string): OperationReturn => {
    return async (dispatch: Dispatch<Action>, getState: () => InitialState) => {
        if(!window.confirm('本当に消してもいいですか')) {
            return false;
        }
        const uid = getState().user.uid;
        db.collection(`users/${uid}/todos`).doc(todoId).delete()
    }
}

export const changeTodoProgress = (todoId: string, progress: number, todo: Todo) => {
    return async (dispatch: Dispatch<Action>, getState: () => InitialState) => {
        const todos = getState().todos.todos;
        const uid = getState().user.uid;

        const newTodo = {
            ...todo,
            progress: progress,
        }
        db.collection(`users/${uid}/todos`).doc(todoId).update(newTodo)
    }
}

export const fetchTodos = (uid: string) => {
    return async (dispatch: Dispatch<Action>) => {
        await db.collection(`users/${uid}/todos`).orderBy('num', 'asc').get()
            .then(snapshot => {
                let fetchedTodos: Todo[] = [];
                snapshot.forEach(doc => {
                    const data = doc.data() as Todo
                    const todo = {
                        ...data,
                        todoId: doc.id,
                    } as Todo
                    fetchedTodos.push(todo);
                })
                dispatch(fetchTodosAction(fetchedTodos))
            })
    }
}

export const updateTodos = (todos: Todo[]) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(updateTodosAction(todos))
    }
}

export const resetData = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(resetDataAction([]));
    }
}