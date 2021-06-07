
export type InitialState = {
    user: {
        uid: string | undefined;
        isSignedIn: boolean;
        username: string | null
    };
    todos: {
        todoId: string;
        todoName: string;
        detail: string;
        chargedBy: string;
        deadline: string;
        startDate: string;
        progress: number;
        num: string
    }[];
}

export type User = InitialState["user"]
export type Todos = InitialState["todos"]

const initialState: InitialState = {
    user: {
        uid: undefined,
        isSignedIn: false,
        username: '', 
    },
    todos: [
        // {
        //    todoId: '0',
        //    todoName: '日記を書く',
        //    detail: 'ここであれをしてここであれをしてここであれwそいて',
        //    chargedBy: '村田',
        //    deadline: '4月2日',
        //    startDate: '4月1日', 
        //    progress: 0,
        // },
    ],
};

export default initialState;