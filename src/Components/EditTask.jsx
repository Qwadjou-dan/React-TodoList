import React, { useRef, useState } from "react";

export const EditTask = ({ task, handleEditTask }) => {
  const [taskName, setTaskName] = useState(task.task);
  const [date, setDate] = useState(task.date);
  const [time, setTime] = React.useState(task.time);
  const [complete, setComplete] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleTask = (e) => {
    setTaskName(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    let updatedTask = { task: taskName, date: date, time: time, id: task.id };
    handleEditTask(task.id, updatedTask);
    closeModal();
  };
  return (
    <div>
      <button className="btn" onClick={openModal}>
        Edit
      </button>

      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </form>
          <h1 className="text-4xl mb-10 text-[#85B8CB]">Input Task</h1>
          <div className="space-y-10">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-[#85B8CB]">Edit Task</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={taskName}
                onChange={handleTask}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Edit Date</span>
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
                <span className="label-text">Edit Time</span>
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
            <button
              onClick={handleAddTask}
              className="btn bg-[#85B8CB] text-black"
            >
              Add Task
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
