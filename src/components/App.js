import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
   
  const [task, setTask] = useState(TASKS)
  // create state
  const [buttonState, setButtonState] = useState("All")
  // filter
  const filteredTasks = task.filter((item)=>{
    if(buttonState==="All") return true; 
    return setButtonState === item.category; 
   })
  
console.log(filteredTasks)
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onButton={buttonState} onSetButtonState={setButtonState}/>
      <NewTaskForm />
      <TaskList tasks={filteredTasks}/>
    </div>
  );
}

export default App;
