import React from "react";

const ThematicBreak = (): JSX.Element => (
  <div className="full-width">
    <hr />
    <style jsx>{`
      hr {
        background-image: linear-gradient(
          to right,
          transparent,
          #362640,
          transparent
        );
        border: 0;
        height: 2px;
        margin: 3rem auto;
        width: 80%;
      }

      .full-width {
        grid-column: 1/4;
      }
    `}</style>
  </div>
);

export default ThematicBreak;
