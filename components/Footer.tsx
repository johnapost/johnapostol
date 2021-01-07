import React from "react";
import ColumnWrapper from "./ColumnWrapper";
import { atLeastMedium } from "../utils/breakpoints";
import FadedRule from "./FadedRule";

const Footer = (): JSX.Element => (
  <>
    <FadedRule />
    <div className="footer">
      <ColumnWrapper>
        <p className="copyright">© 2021 John Apostol. All rights reserved.</p>
      </ColumnWrapper>
    </div>
    <style jsx>{`
      .footer {
        margin: 1rem 0 3rem;
      }

      .copyright {
        color: #362640;
        display: flex;
        font-family: "Lato", serif;
        justify-content: center;
      }

      @media ${atLeastMedium} {
        .footer {
          display: grid;
          grid-template-columns: 1fr 740px 1fr;
        }

        .footer:before {
          content: "";
        }
      }
    `}</style>
  </>
);

export default Footer;
