import { db, FirebaseTimestamp } from "../../../lib/db";
import { addTodoAction, changeTodoProgressAction, deleteTodoAction, fetchTodosAction, updateTodosAction, resetDataAction } from "./actions"

export const addTodo = (todoName, detail, chargedBy, deadline) => {
    return async (dispatch, getState) => {
        if(todoName === '' || detail === '' || chargedBy === '' || deadline === '' ) {
            alert('入力項目に空欄があります。ご確認の上、もう一度入力してください。');
            return false;
        }
        let todos = getState().todos.todos
        const uid = getState().user.uid;

        let num;

        if(todos.length > 0) {
            num = todos.length.toString();
        } else {
            num = '0';
        }

        const timestamp = FirebaseTimestamp.now();
        
        const dateToString = (date) => {
            return date.getFullYear() + '-'
                + ('00' + (date.getMonth() + 1)).slice(-2) + '-'
                + ('00' + date.getDate()).slice(-2)
        
        };

        const startDate = dateToString(timestamp.toDate())

        const addedTodo = {
            num: num,
            todoName,
            detail,
            chargedBy,
            deadline,
            startDate: startDate,
            progress: 0            
        }
        console.log(uid);
        console.log(addedTodo);

        db.collection('users').doc(uid).collection('todos').add(addedTodo)
            .then(doc => {
                const todoId = doc.id;
                const todoToStore = {
                    ...addedTodo,
                    todoId,
                };
                todos.push(todoToStore)
                dispatch(addTodoAction(todos))
            })

    }
}

export const deleteTodo = (todoId) => {
    return async (dispatch, getState) => {
        if(!window.confirm('本当に消してもいいですか')) {
            return false;
        }
        const uid = getState().user.uid;
        console.log(uid)
        console.log(todoId)
        db.collection(`users/${uid}/todos`).doc(todoId).delete()
    }
}

export const changeTodoProgress = (todoId, progress, todo) => {
    return async (dispatch, getState) => {
        const todos = getState().todos.todos;
        const uid = getState().user.uid;

        const newTodo = {
            ...todo,
            progress: progress,
        }

        db.collection(`users/${uid}/todos`).doc(todoId).update(newTodo)
    }
}

export const fetchTodos = (uid) => {
    return async (dispatch) => {
        await db.collection(`users/${uid}/todos`).orderBy('num', 'asc').get()
            .then(snapshot => {
                let fetchedTodos = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    const todo = {
                        ...data,
                        todoId: doc.id,
                    }
                    fetchedTodos.push(todo);
                })
                console.log(fetchedTodos)
                dispatch(fetchTodosAction(fetchedTodos))
            })
    }
}

export const updateTodos = (todos) => {
    return async (dispatch) => {
        dispatch(updateTodosAction(todos))
    }
}

export const resetData = () => {
    return async (dispatch) => {
        dispatch(resetDataAction([]));
    }
}