import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import MainSection from "./Components/MainSection/MainSection";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";

const allTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};
const dataPromise = allTickets();
function App() {
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  const handleTicketClick = (ticket) => {
    const alreadyAddedBtn = taskStatus.find((t) => t.id === ticket.id);
    console.log(alreadyAddedBtn);
    if (alreadyAddedBtn) {
      toast.warn(" This ticket is already being worked on");
      return;
    } else {
      console.log("hello");
      toast.success(`Ticket "${ticket.title}" added to the Task Status`);
      setTaskStatus([...taskStatus, ticket]);
      setProgressCount(progressCount + 1);
    }
  };

  const handleCompleteButton = (ticket) => {
    toast(`Task "${ticket.title}" completed!`);

    setResolvedTask((prevResolved) => [...prevResolved, ticket]);
    setResolvedCount(resolvedCount + 1);

    setTaskStatus((prevTask) => prevTask.filter((t) => t.id !== ticket.id));
    setProgressCount(progressCount - 1);
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner
        progressCount={progressCount}
        resolvedCount={resolvedCount}
      ></Banner>
      <Suspense
        fallback={
          <h1 className="text-center font-bold text-green-500 text-4xl">
            Loading Data. Please Wait...
          </h1>
        }
      >
        <MainSection
          className="max-w-auto"
          taskStatus={taskStatus}
          resolvedTask={resolvedTask}
          handleTicketClick={handleTicketClick}
          handleCompleteButton={handleCompleteButton}
          dataPromise={dataPromise}
        ></MainSection>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
