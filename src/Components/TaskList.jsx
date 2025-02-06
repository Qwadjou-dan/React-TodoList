import React, { useState } from "react";
import { EditTask } from "./EditTask";
import { MdDelete } from "react-icons/md";

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
          className="flex flex-col md:flex-row gap-2 items-center mb-5 mx-5"
        >
          <div
            className="h-fit w-full py-5 px-2 border-2 rounded-md flex flex-row gap-10 text-black"
            style={{ backgroundColor: task.complete ? "green" : "bgColor" }}
          >
            <p className="min-w-[200px] truncate flex-grow">{task.task}</p>
            <div className="border border-red-400"></div>
            <span className="md:hidden">{task.date.slice(2, 10)}</span>
            <span className="md:block hidden">{task.date.slice(0, 10)}</span>
            <div className="border border-red-400"></div>
            <p>{task.time}</p>
          </div>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => {
                handleCompletedTask(task.id);
              }}
              className="btn btn-primary border-none"
              style={{
                backgroundColor: task.complete ? "green" : "bgColor",
              }}
            >
              <span className="md:block hidden">
                {task.complete ? "Completed" : "Complete"}
              </span>
              <input type="checkbox" className="md:hidden"></input>
            </button>
            <EditTask task={task} handleEditTask={handleEditTask} />
            <div>
              <button
                onClick={() => {
                  handleDeleteTask(task.id);
                }}
                className="btn btn-error border-none"
              >
                <span className="md:block hidden">Delete</span>
                <MdDelete className="md:hidden" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
