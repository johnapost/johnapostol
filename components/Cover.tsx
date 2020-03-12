import React from "react";
import Name from "./Name";

const Cover = (): JSX.Element => (
  <div className="outside">
    <div className="inside">
      <Name />
      <span>lifelong learner</span>
    </div>
    <style jsx>{`
      .outside {
        box-sizing: border-box;
        height: 45vh;
        position: relative;
        width: 100vw;
      }

      .outside:before {
        background: radial-gradient(circle, transparent 50%, #000000 150%),
          url(${require("../public/static/cover.jpg")}) center top;
        background-size: cover;
        background-color: rgba(0, 0, 0, 0.2);
        filter: blur(0.6px);
        content: "";
        position: absolute;
        height: 100%;
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
