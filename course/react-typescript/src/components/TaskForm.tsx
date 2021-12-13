import React from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import { Task } from '..';


export const TaskForm: React.FC<{
  tasks : Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
}>= (props) => {
  // フォームの値を保持する
  const [newTaskLabel, setNewTaskLabel] = React.useState<string>("")


  // Taskの登録
  const handleClickAddButton = () => {
    const newTasks = [...props.tasks];

    newTasks.push({
      label: newTaskLabel,
      isDone: false
    });

    setNewTaskLabel("");

    props.setTasks(newTasks);
  }

  // 完了したTaskを削除する
  const handleClickClearTasksButton = () => {
    props.setTasks(props.tasks.filter((v) => {
      if (v.isDone === false) return true;
      return false;
    }));
  }

  return (
    <>
    <h2>新しいタスクを追加する</h2>



    <Box>

      <TextField
        color="primary"
        label={"タスクを入力"}
        onChange={(e) => {
          setNewTaskLabel(e.target.value)
        }}
        value={newTaskLabel}
        sx={{
          width: "100%"
        }}
      />



    </Box>

    <Box style={{
      marginTop: "10px"
    }}>
      <Button  variant="outlined" onClick={() => {
        handleClickAddButton();
      }}>
        追加
      </Button>
    </Box>


    <Box style={{
      marginTop: "10px"
    }}>
      <Button  variant="contained" color="error" onClick={() => {
        handleClickClearTasksButton();
      }}>
        完了済みタスクを削除
      </Button>
    </Box>




    </>
  );
};

