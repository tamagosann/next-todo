import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { GreyButton } from './UIKit';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/todos/selectors';
import { getUsername } from '../redux/user/selecters';
import { signOut } from '../redux/user/operations';
import { Divider } from '@material-ui/core';
import Link from 'next/link';
import { InitialState, Todos } from 'src/redux/store/initialstate';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  mr20: {
    marginRight: 20,
  }
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state: InitialState) => state);
  const username = getUsername(selector);
  const todos: Todos = getTodos(selector);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Link href={'/'}>
            <Typography variant="h6" noWrap>
              Todo List 
            </Typography>
          </Link>
          <Divider />
          <div className={classes.grow} />
          { username && (
            <div className={classes.mr20}>ようこそ、{username}様！</div>
          )}
          <div>
            {username && (
              <GreyButton label={'ログアウト'} onClick={() => dispatch(signOut())}/>
            )}
            <IconButton color="inherit">
              <Badge badgeContent={todos && todos.length} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;