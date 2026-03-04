import { CiCalendar } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";

const SingleTicket = ({ ticket, handleTicketClick }) => {
  const date = new Date(ticket.createdAt);
  const colorKey = ticket.priority?.toLowerCase();
  const colors = {
    "high priority": "text-red-600",
    "medium priority": "text-yellow-500",
    "low priority": "text-green-600",
  };
  const handleClick = () => {
    handleTicketClick(ticket);
  };
  return (
    <button className="border p-2 m-2" onClick={handleClick}>
      <div className="flex justify-between">
        <h3>{ticket.title}</h3>
        <div
          className={`px-3 py-1 rounded-full text-sm text-black ${
            ticket.status === "Open"
              ? "bg-green-400 text-green-800"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="flex items-center gap-1">
            <FaRegCircle />
            {ticket.status}
          </div>
        </div>
      </div>
      <div>
        <p className="start">{ticket.description}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <h4>{ticket.id}</h4>
          <h4 className={colors[colorKey]}>{ticket.priority} </h4>
        </div>
        <div className="flex items-center gap-2">
          <h3>{ticket.customer}</h3>
          <h2 className="flex items-center">
            <CiCalendar />
            <span>{date.toLocaleDateString()}</span>
          </h2>
        </div>
      </div>
    </button>
  );
};

export default SingleTicket;
