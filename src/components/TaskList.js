import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {

  const [myTask, setMyTask] =useState(tasks); 

  function handlDelete(text){
    const updatedTasks = myTask.filter((task)=> task.text !== text)
    console.log(updatedTasks)
    setMyTask(updatedTasks)
  }


  return (
    <div className="tasks">
     {myTask.map(task =>(
      <Task key={task.text} category={task.category}  text={task.text} onDelete={handlDelete}/> 
     )
     )}
    </div>
  );
}

export default TaskList;
