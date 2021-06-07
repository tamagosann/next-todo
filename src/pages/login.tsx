import React, { FC, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "../redux/user/selecters";
import { signIn } from "../redux/user/operations";
import Head from "next/head";
import { InitialState } from "src/redux/store/initialstate";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LogIn: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state: InitialState) => state);
  const isSignedIn = getIsSignedIn(selector);
  console.log(isSignedIn);

  return (
    <>
      <Head>
          <title>Login Todo</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => dispatch(signIn())}
        >
          ログイン（何も入力しなくて大丈夫です）
        </Button>
      </Container>
    </>
  );
};

export default LogIn;
