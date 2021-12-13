import React from 'react';
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
    新しいタスクを追加する
    <input 
        onChange={(e) => {
          setNewTaskLabel(e.target.value)
        }}
 
        value={newTaskLabel}
    />


    <button onClick={() => {
      handleClickAddButton();
    }}>
      追加
    </button>
    <br />

    <button onClick={() => {
      handleClickClearTasksButton();
    }}>
      完了済みタスクを削除
    </button>
    </>
  );
};

