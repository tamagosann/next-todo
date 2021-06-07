import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todos/selectors";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteTodo } from "../redux/todos/operations";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { InitialState, Todos } from "src/redux/store/initialstate";
import { Todo } from "src/redux/todos/type";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  noTodo: {
    height: 80,
    textAlign: "center",
  },
  fight: {
    fontWeight: "bold",
    fontSize: "20px",
    position: "relative",
  },
  mr20: {
    marginRight: 20,
  },
  fiGit: {
    color: "red",
  },
});

const TodoListTable = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const selector = useSelector((state:InitialState) => state);
  const todos: Todos = getTodos(selector);

  const LinkToEachTodo = useCallback((path) => {
      router.push("/detail/" + path);
    },[router]);

  const deleteTodoOnClicked = (event: React.MouseEvent<SVGSVGElement, MouseEvent>, todoId: string): void => {
    event.stopPropagation();
    dispatch(deleteTodo(todoId));
  };

  type Message = {
    [message: string]: string
  }

  const message: Message = {
    fight: "いい感じ！",
    last: "もう少し！",
    complete: "完了！",
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Todo</TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">担当者</TableCell>
            <TableCell align="right">進捗度</TableCell>
            <TableCell align="right">消去</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos && todos.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} align="center">
                todoが全て終了しました。
              </TableCell>
            </TableRow>
          )}
          {todos &&
            todos.length > 0 &&
            todos.map((todo) => (
              <TableRow key={todo.todoId}
              onClick={() => {
                LinkToEachTodo(todo.todoId);
              }}
              >
                <TableCell component="th" scope="row">
                  {todo.todoName}
                </TableCell>
                <TableCell align="right">{todo.num}</TableCell>
                <TableCell align="right">{todo.chargedBy}</TableCell>
                <TableCell align="right">
                  <div className={classes.fight}>
                    <span className={classes.mr20}>
                      {todo.progress >= 40 &&
                        todo.progress <= 60 &&
                        message.fight}
                      {todo.progress >= 70 &&
                        todo.progress <= 90 &&
                        message.last}
                      {todo.progress === 100 && message.complete}
                    </span>
                    {todo.progress + " " + "%"}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    onClick={(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => deleteTodoOnClicked(event, todo.todoId)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoListTable;
