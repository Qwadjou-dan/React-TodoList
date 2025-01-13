import React, { useState } from "react";
import InputItems from "./Components/InputItems";
import TaskList from "./Components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCompletedTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, complete: true };
        } else {
          return task;
        }
      })
    );
  };

  const handleEditTask = (id, newTask) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return newTask;
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="flex flex-row gap-20 ml-10 h-screen">
      <div className="w-[300px]">
        <InputItems handleNewTask={handleNewTask} />
      </div>

      <div className="w-full bg-[#85B8CB]">
        <h1 className="text-4xl mb-20 text-[#1D232A]">Task List</h1>
        <TaskList
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleCompletedTask={handleCompletedTask}
          handleEditTask={handleEditTask}
        />
      </div>
    </div>
  );
};

export default App;
