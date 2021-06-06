import { Provider, useDispatch, useSelector } from "react-redux";
import { AnyAction, EmptyObject, Store } from "redux";
import { db } from '../../lib/db';
import { useRouter } from 'next/dist/client/router';
import { fetchTodos, resetData, updateTodos } from '../redux/todos/operations';
import { getTodos } from '../redux/todos/selectors';
import { getIsSignedIn, getUid } from '../redux/user/selecters';
import { useEffect } from "react";
import { listenAuthState } from "../redux/user/operations";
import Header from "./Header";

type LayoutProps = {
    children: JSX.Element;
    home?: boolean;
}

const Layout = ({ children, home }: LayoutProps): JSX.Element => {
    const selector = useSelector((state) => state);
    const uid = getUid(selector);
    const isSignedIn = getIsSignedIn(selector);
    const dispatch = useDispatch();
    const router = useRouter();
    let todos = getTodos(selector)
    console.log(todos)
  
    useEffect(() => {
      if (uid) {
        dispatch(fetchTodos(uid));
        if (router.pathname === "/login") {
          router.push("/");
        }
      } else {
        dispatch(resetData());
      }
    }, [uid]);
    useEffect(() => {
        if(!isSignedIn) {
            console.log(isSignedIn)
            dispatch(listenAuthState(router))
            console.log(isSignedIn)
        }
    }, [isSignedIn])
  
    useEffect(() => {
      if (uid) {
        const unsubscribe = db.collection(`users/${uid}/todos`)
          .onSnapshot((snapshots) => {
            snapshots.docChanges().forEach((change) => {
              const data = change.doc.data();
              const todo = {
                ...data,
                todoId: change.doc.id
              }
              const changeType = change.type;
    
              switch (changeType) {
                case "added":
                  todos.push(todo);
                  break;
                case "modified":
                  const index = todos.findIndex((todo) => {
                    return todo.todoId === change.doc.id;
                  });
                  todos[index] = todo;
                  break;
                case "removed":
                  todos = todos.filter((todo) => {
                    return todo.todoId !== change.doc.id;
                  });
                  break;
                default:
                  break;
              }
            });
            dispatch(updateTodos(todos));
          });
    
        return () => unsubscribe();
      }
    }, [uid]);
  return (
      <>
        <Header />
        {children}
      </>
  )
}

export default Layout;