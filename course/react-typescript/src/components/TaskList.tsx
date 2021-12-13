import React from 'react';
import { Task } from '..';
export const TaskList: React.FC<{
  tasks : Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}> = (props) => {
  // Taskの状態を切り替える

  const handleClickCheckBox = (i:number, nowStatus: boolean) => {
    const newTasks = [...props.tasks];

    if (nowStatus === true) {
      newTasks[i].isDone = false;
    } else {
      newTasks[i].isDone = true;
    }

    props.setTasks(newTasks);

  }

  return (
    <>
    <ul>
      {props.tasks.map((v,i) => {
        return (
          <li key={`todo-${i}`}>
            <input
              type={"checkbox"}
              checked={v.isDone}
              onClick={() => {
                handleClickCheckBox(i, v.isDone);
              }}
            />
            
            {
              v.isDone ? 
              <s>{v.label}</s>
              :
              <>{v.label}</>
            }

          </li>
        )
      } )}
    </ul>
    </>
  );
};
