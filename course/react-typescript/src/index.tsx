import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { request } from "./server";
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';

// TODOタスクの型
export type Task = {
  label: string,
  isDone: boolean,
}

const App: React.VFC = () => {
  // タスクリストを格納する
  const [tasks, setTasks] = React.useState<Task[]>([]);


  // ページマウント時にモックAPIからデータを取得
  useEffect(() => {
    request.fetchTasks((payload: Task[]) => {
      setTasks(payload);
    })
  },[])

  return (
    <div
      style={{
        width:"700px",
        margin: " 0 auto"
      }}
    >
      <Box>
         {/* ヘッダー */}
         <h1>Tutorial Works</h1>



        <Paper style={{
          padding:"10px"
        }}>
          {/* タスク追加、削除 */}
          <TaskForm tasks={tasks} setTasks={setTasks}/>
        </Paper>

        <Paper>
          <h2>React Todo List</h2>
          {/* 一覧表示 */}
          <TaskList tasks={tasks} setTasks={setTasks} />
        </Paper>
      </Box>
      


 
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
