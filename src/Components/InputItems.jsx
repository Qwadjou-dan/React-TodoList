import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const InputItems = ({ handleNewTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = React.useState("");
  const [complete, setComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!task.trim()) {
      setErrorMessage("Task cannot be empty");
      return;
    }
    handleNewTask({ task, date, time, id: uuid(), complete });
    setTask("");
    setDate("");
    setTime("");
    setErrorMessage("");
  };
  return (
    <div className="flex flex-col items-center sm:flex sm:items-start">
      <h1 className="text-4xl mb-10 text-[#85B8CB]">Input Task</h1>
      <div className="space-y-2 sm:space-y-10 ">
        <label className="form-control w-full max-w-xs flex flex-row sm:flex-col">
          <div className="label">
            <span className="label-text sm:block hidden">Input Task</span>
            <span className="sm:hidden">Task</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={task}
            onChange={handleTask}
          />
        </label>

        <label className="form-control w-full max-w-xs flex flex-row sm:flex-col">
          <div className="label">
            <span className="label-text sm:block hidden">Select a Date</span>
            <span className="sm:hidden">Date</span>
          </div>
          <input
            type="date"
            className="input input-bordered w-full max-w-xs"
            value={date}
            onChange={handleDate}
          />
          <div className="label">
            <span className="label-text-alt sm:block hidden">
              Format: YYYY-MM-DD
            </span>
          </div>
        </label>
        <label className="form-control w-full max-w-xs flex flex-row sm:flex-col">
          <div className="label">
            <span className="label-text sm:block hidden">Select a Time</span>
            <span className="sm:hidden">Time</span>
          </div>
          <input
            type="time"
            className="input input-bordered w-full max-w-xs"
            value={time}
            onChange={handleTime}
          />
          <div className="label">
            <span className="label-text-alt sm:block hidden">
              Format: HH:MM (24-hour)
            </span>
          </div>
        </label>
        <button onClick={handleAddTask} className="btn bg-[#85B8CB] text-black">
          Add Task
        </button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default InputItems;
