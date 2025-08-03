import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light p-4">
      <h6 className="text-center text-white">
        All rights reserved &copy;{" "}
        <a
          href="https://www.linkedin.com/in/adityatiwari2855/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-info text-decoration-none d-inline-flex align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-linkedin me-1"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.357.54-1.357 1.248 0 .694.52 1.248 1.327 1.248h.014zM13.458 13.394v-3.993c0-2.137-1.14-3.131-2.659-3.131-1.223 0-1.77.684-2.075 1.165v-1.003H6.323c.03.663 0 7.225 0 7.225h2.401v-4.034c0-.215.016-.43.079-.586.173-.43.567-.877 1.229-.877.867 0 1.214.662 1.214 1.632v3.865h2.212z" />
          </svg>
          Aditya Tiwari
        </a>
      </h6>
    </div>
  );
};

export default Footer;
