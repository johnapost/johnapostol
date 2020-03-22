import React from "react";
import Name from "./Name";

const Cover = (): JSX.Element => (
  <div className="outside">
    <div className="background" />
    <div className="inside">
      <Name />
      <span>lifelong learner</span>
    </div>
    <style jsx>{`
      .outside {
        box-sizing: border-box;
        height: 40vh;
        max-height: 300px;
        position: relative;
        width: 100vw;
      }

      .background::before {
        background: url(${require("../public/static/cover.jpg")}) center top;
        background-size: cover;
        background-color: rgba(0, 0, 0, 0.2);
        filter: blur(1.5px);
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
      }

      .background::after {
        background-color: #362640;
        background-image: radial-gradient(circle, transparent 20%, #ffffff 160%),
          url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23dfdbe5' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
        content: "";
        opacity: 0.4;
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
      }

      .inside {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-family: "Lato", serif;
        height: 100%;
        justify-content: center;
        position: relative;
        width: 100%;
      }

      span {
        color: #ffffff;
        text-shadow: 1px 1px 5px #362640;
        font-size: 1rem;
      }
    `}</style>
  </div>
);

export default Cover;
