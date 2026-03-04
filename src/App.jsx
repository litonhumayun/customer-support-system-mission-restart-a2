import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import MainSection from "./Components/MainSection/MainSection";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";

const allTickets = async () => {
  const res = await fetch("/public/tickets.json");
  return res.json();
};
const dataPromise = allTickets();
function App() {
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState(null);
  const [resolvedTask, setResolvedTask] = useState([]);

  const handleTicketClick = (ticket) => {
    console.log(taskStatus);
    if (taskStatus && taskStatus.id === ticket.id) {
      toast("This ticket is already included");
      return;
    } else {
      toast(`Ticket "${ticket.title}" added to Task Status`);
      setTaskStatus(ticket);
      setProgressCount(progressCount + 1);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner
        progressCount={progressCount}
        resolvedCount={resolvedCount}
      ></Banner>
      <MainSection
        taskStatus={taskStatus}
        resolvedTask={resolvedTask}
        handleTicketClick={handleTicketClick}
        dataPromise={dataPromise}
      ></MainSection>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
