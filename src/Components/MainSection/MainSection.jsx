import React, { use, useState } from "react";
import SingleTicket from "../SingleTicket/SingleTicket";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const MainSection = ({
  dataPromise,
  handleTicketClick,
  taskStatus,
  handleCompleteButton,
  resolvedTask,
}) => {
  const initialTickets = use(dataPromise);
  const [displayTickets, setDisplayTickets] = useState(initialTickets);
  const removingExistingCard = (ticket) => {
    const existing = displayTickets.filter((t) => t.id !== ticket.id);
    setDisplayTickets(existing);
    handleCompleteButton(ticket);
  };
  return (
    <div className=" px-4 py-4 flex flex-col lg:flex-row gap-2 max-w-auto mx-auto">
      <div className=" lg:w-3/4">
        <div>
          <h1 className="text-3xl font-black text-gray-800 text-center ">
            Customer Tickets
          </h1>
          <p className="text-gray-500 mt-1 text-center pb-4">
            Select a ticket to assign it to your status
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {displayTickets.map((ticket) => (
            <SingleTicket
              key={ticket.id}
              handleTicketClick={handleTicketClick}
              ticket={ticket}
            ></SingleTicket>
          ))}
          {/* Empty State for the Grid */}
          {displayTickets.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed items-center">
              <p className="text-gray-400 text-lg">
                All tickets have been processed! 🎉
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="lg:w-1/4 m-4">
        <TaskStatus
          taskStatus={taskStatus}
          handleCompleteButton={removingExistingCard}
        ></TaskStatus>
        <ResolvedTask resolvedTask={resolvedTask}></ResolvedTask>
      </div>
    </div>
  );
};

export default MainSection;
