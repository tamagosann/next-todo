import React, { FC } from "react";
import { ListItem, ListItemText } from "@material-ui/core";

type TodoDetailListItemProps = {
    text: string,
    label: string,
}

const TodoDetailListItem: FC<TodoDetailListItemProps> = (props) => {
  return (
    <ListItem> 
      <ListItemText primary={props.text} secondary={props.label} />
    </ListItem>
  );
};

export default TodoDetailListItem;
