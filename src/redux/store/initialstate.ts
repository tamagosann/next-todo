
type InitialState = {
    user: {
        uid: null | string;
        isSignedIn: boolean;
        username: string;
    };
    todos: {
        todoId: string;
        todoName: string;
        detail: string;
        chargedBy: string;
        deadline: string;
        startDate: string;
        progress: number;
    }[];
}

const initialState: InitialState = {
    user: {
        uid: null,
        isSignedIn: false,
        username: '', 
    },
    todos: [
        {
           todoId: '0',
           todoName: '日記を書く',
           detail: 'ここであれをしてここであれをしてここであれwそいて',
           chargedBy: '村田',
           deadline: '4月2日',
           startDate: '4月1日', 
           progress: 0,
        },
        // {
        //    num: '1',
        //    todoName: '日記書く',
        //    detail: 'ここであれをしてここであれをしてここであれwそいて',
        //    chargedBy: '田中',
        //    deadline: '4月2日',
        //    startDate: '4月1日', 
        //    progress: 0,
        // },
        // {
        //    num: '2',
        //    todoName: '日記を書く',
        //    detail: 'ここであれをしてここであれをしてここであれwそいて',
        //    chargedBy: '相澤',
        //    deadline: '4月2日',
        //    startDate: '4月1日', 
        //    progress: 0,
        // },
    ],
};

export default initialState;