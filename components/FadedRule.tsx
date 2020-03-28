import React from "react";

const FadedRule = (): JSX.Element => (
  <>
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
        margin: auto;
        width: 80%;
      }
    `}</style>
  </>
);

export default FadedRule;
