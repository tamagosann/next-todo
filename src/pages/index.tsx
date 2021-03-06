import PrimaryButton from "../components/UIKit/PrimaryButton";
import TodoListTable from "../components/TodoListTable";
import Link from "next/link";
import { Container } from "@material-ui/core";
import { FC } from "react";


const App: FC = () => {

  return (
    <>
      <Container maxWidth='sm'>
        <TodoListTable />
        <Link href={'/add'}>
          <a>
            <PrimaryButton
              label={"Todoを追加"}
            />
          </a>
        </Link>
      </Container>
    </>
  );
};

export default App;
