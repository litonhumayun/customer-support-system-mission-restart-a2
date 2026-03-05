import React from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const handleNewTicketAlert = () => {
    toast.info("Opening new ticket form...", {
      position: "top-right",
      theme: "colored",
    });
  };

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-md shadow-sm sticky top-0 z-50 px-4 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold hover:bg-blue-600 hover:text-white">
          Digicacy Support
        </a>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-primary ml-2 hover:bg-amber-50 hover:text-black"
          onClick={handleNewTicketAlert}
        >
          <FaPlus />
          New Ticket
        </a>
      </div>
    </div>
  );
};

export default Navbar;
