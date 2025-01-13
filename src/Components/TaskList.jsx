import React, { useState } from "react";
import { EditTask } from "./EditTask";

const TaskList = ({
  tasks,
  handleDeleteTask,
  handleCompletedTask,
  handleEditTask,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex flex-row gap-2 items-center mb-5 mx-5 "
        >
          <div
            className="h-fit w-full p-5 border-2 rounded-md flex flex-row gap-10 text-black"
            style={{ backgroundColor: task.complete ? "green" : "bgColor" }}
          >
            <p className="w-[400px] truncate">{task.task}</p>
            <div className="border border-red-400"></div>
            <p>{task.date}</p>
            <div className="border border-red-400"></div>
            <p>{task.time}</p>
          </div>
          <button
            onClick={() => {
              handleCompletedTask(task.id);
            }}
            className="btn btn-primary"
            style={{
              backgroundColor: task.complete ? "red" : "bgColor",
            }}
          >
            {task.complete ? "Completed" : "Complete"}
          </button>
          <EditTask task={task} handleEditTask={handleEditTask} />
          <button
            onClick={() => {
              handleDeleteTask(task.id);
            }}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
