import React, { use } from "react";
import SingleTicket from "../SingleTicket/SingleTicket";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const MainSection = ({ dataPromise, handleTicketClick, taskStatus }) => {
  const tickets = use(dataPromise);
  return (
    <div className="flex justify-between">
      <div>
        <h1>Customer Tickets</h1>
        <div className="grid grid-cols-2">
          {tickets.map((ticket) => (
            <SingleTicket
              key={ticket.id}
              handleTicketClick={handleTicketClick}
              ticket={ticket}
            ></SingleTicket>
          ))}
        </div>
      </div>
      <div>
        <TaskStatus taskStatus={taskStatus}></TaskStatus>
        <ResolvedTask></ResolvedTask>
      </div>
    </div>
  );
};

export default MainSection;
