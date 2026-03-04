import React from "react";

const TaskStatus = ({ taskStatus, handleCompleteButton }) => {
  //   console.log(taskStatus, handleCompleteButton);
  const handleComplete = () => {
    handleCompleteButton(taskStatus);
  };
  return (
    <div>
      <h2 className="font-bold text-xl">Task Status</h2>
      {taskStatus ? (
        <div>
          <h3>{taskStatus.title}</h3>
          <button className="btn btn-primary" onClick={handleComplete}>
            Complete
          </button>
        </div>
      ) : (
        <p>Select a ticket to add to the Task Status</p>
      )}
    </div>
  );
};

export default TaskStatus;
