import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const InputItems = ({ handleNewTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = React.useState("");
  const [complete, setComplete] = useState(false);

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
    handleNewTask({ task, date, time, id: uuid(), complete });
    setTask("");
    setDate("");
    setTime("");
  };
  return (
    <div>
      <h1 className="text-4xl mb-10 text-[#85B8CB]">Input Task</h1>
      <div className="space-y-10">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Input Task</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={task}
            onChange={handleTask}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select a Date</span>
          </div>
          <input
            type="date"
            className="input input-bordered w-full max-w-xs"
            value={date}
            onChange={handleDate}
          />
          <div className="label">
            <span className="label-text-alt">Format: YYYY-MM-DD</span>
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select a Time</span>
          </div>
          <input
            type="time"
            className="input input-bordered w-full max-w-xs"
            value={time}
            onChange={handleTime}
          />
          <div className="label">
            <span className="label-text-alt">Format: HH:MM (24-hour)</span>
          </div>
        </label>
        <button onClick={handleAddTask} className="btn bg-[#85B8CB] text-black">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default InputItems;
