import React from "react";

const ThematicBreak = (): JSX.Element => (
  <div className="full-width">
    <hr />
    <style jsx>{`
      hr {
        border: 0;
        margin: 3rem auto;
        text-align: center;
      }

      hr::before {
        content: "...";
        font-size: 2rem;
        letter-spacing: 17px;
        line-height: 40px;
        text-indent: 17px;
      }

      .full-width {
        grid-column: 1/4;
      }
    `}</style>
  </div>
);

export default ThematicBreak;
