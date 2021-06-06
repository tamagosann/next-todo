import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import { TodosReducer } from '../todos/reducers'
import { UserReducer } from '../user/reducers'

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            todos: TodosReducer,
            user: UserReducer,
        }),
        applyMiddleware(
            thunk
        )
    )
}