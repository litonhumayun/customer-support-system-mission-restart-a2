import React from "react";

const TaskStatus = ({ taskStatus, handleCompleteButton }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">
        Task Status: {taskStatus.length}
      </h2>

      {taskStatus.length > 0 ? (
        <div className="space-y-2">
          {taskStatus.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center p-3 bg-blue-50 border border-blue-200 rounded shadow-sm"
            >
              <h3 className="font-medium text-blue-900">{task.title}</h3>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => handleCompleteButton(task)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">
          Select a ticket to add to the Task Status
        </p>
      )}
    </div>
  );
};

export default TaskStatus;
