import React from "react";

const Name = (): JSX.Element => (
  <h1 className="shadow">
    John Apostol
    <style jsx>{`
      h1 {
        font-family: "Lato", serif;
        font-size: 2rem;
        margin: 0.5rem 0;
        padding: 0.5rem 1.1rem;
        color: #ffffff;
        text-align: left;
        border: 2px solid #ffffff;
        box-shadow: 1px 1px 5px #362640, inset 1px 1px 5px #362640;
        text-shadow: 1px 1px 5px #362640;
      }
    `}</style>
  </h1>
);

export default Name;
