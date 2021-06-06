import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const TodoDetailListItem = (props) => {
  return (
    <ListItem> 
      <ListItemText primary={props.text} secondary={props.label} />
    </ListItem>
  );
};

export default TodoDetailListItem;
