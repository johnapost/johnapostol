import React from "react";
import ColumnWrapper from "../components/ColumnWrapper";
import GitHub from "../components/GitHub";
import LinkedIn from "../components/LinkedIn";
import Medium from "../components/Medium";
import Resume from "../components/Resume";

const ExternalLinks = (): JSX.Element => (
  <ColumnWrapper>
    <div className="external">
      <a href="https://github.com/johnapost" target="__blank">
        <GitHub />
      </a>
      <a href="https://medium.com/@johnapost" target="__blank">
        <Medium />
      </a>
      <a href="https://www.linkedin.com/in/johnapost/" target="__blank">
        <LinkedIn />
      </a>
      <a href="#">
        <Resume />
      </a>
    </div>
    <style jsx>{`
      .external {
        color: #362640;
        display: flex;
        margin: 2rem 0 0;
      }

      a {
        display: inline-block;
      }

      .external a + a {
        margin-left: 10px;
      }
    `}</style>
  </ColumnWrapper>
);

export default ExternalLinks;
