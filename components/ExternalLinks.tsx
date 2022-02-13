import React from "react";
import ColumnWrapper from "../components/ColumnWrapper";
import GitHub from "../components/GitHub";
import LinkedIn from "../components/LinkedIn";
import Resume from "../components/Resume";
import ADPList from './ADPList';

const ExternalLinks = (): JSX.Element => (
  <ColumnWrapper>
    <div className="external">
      <a href="https://github.com/johnapost" target="__blank">
        <GitHub />
      </a>
      <a href="https://www.linkedin.com/in/johnapost/" target="__blank">
        <LinkedIn />
      </a>
      <a href="https://adplist.org/mentors/john-apostol" target="__blank">
        <ADPList />
      </a>
      <a href="https://gainful-primrose-5f8.notion.site/John-Apostol-Engineering-Manager-83166f3fabee4040b13953422c35d0f8" target="__blank">
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
        margin: 0 0 0 15px;
      }
    `}</style>
  </ColumnWrapper>
);

export default ExternalLinks;
