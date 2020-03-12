import React from "react";
import ColumnWrapper from "./ColumnWrapper";

const Footer = (): JSX.Element => (
  <div className="footer">
    <ColumnWrapper>
      <p className="copyright">© 2020 John Apostol. All rights reserved.</p>
    </ColumnWrapper>
    <style jsx>{`
      .copyright {
        color: #362640;
        display: flex;
        font-family: "Lato", serif;
        justify-content: center;
      }

      .footer {
        margin: 1rem 0 3rem;
      }

      @media (min-width: 900px) {
        .footer {
          display: grid;
          grid-template-columns: 1fr 740px 1fr;
        }

        .footer:before {
          content: "";
        }
      }
    `}</style>
  </div>
);

export default Footer;
