import React from "react";

const ResolvedTask = ({ resolvedTask }) => {
  console.log(resolvedTask);
  return (
    <div className="mt-8 border-t pt-4">
      <h2 className="text-xl font-bold mb-4">
        Resolved Tasks: {resolvedTask.length}
      </h2>

      {resolvedTask.length > 0 ? (
        <div className="space-y-2">
          {resolvedTask.map((task, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded text-green-800 text-sm"
            >
              <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                ✓
              </span>
              {task.title}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 italic">No resolved tasks yet</p>
      )}
    </div>
  );
};

export default ResolvedTask;
