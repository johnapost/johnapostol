import React, { ReactElement } from "react";
import formatDate from "../utils/formatDate";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  children: ReactElement[];
  level: number;
}

const Heading = ({ children, level }: Props): JSX.Element => {
  const [firstChild] = children;

  // For post date
  if (
    level === 1 &&
    firstChild &&
    firstChild.props.value.startsWith("Date: ")
  ) {
    const fullDate = firstChild.props.value.split("Date: ")[1];
    const formattedDate = formatDate(fullDate);
    return (
      <ColumnWrapper>
        <div className="container">
          <img src={require("../static/me.jpg")} />
          <div>
            <div className="author">John Apostol</div>
            <div className="date">{formattedDate}</div>
          </div>
        </div>
        <style jsx>{`
          div {
            font-family: "Merriweather", serif;
            line-height: 20px;
          }

          .container {
            align-items: center;
            display: flex;
          }

          img {
            border-radius: 100%;
            display: inline-block;
            height: 50px;
            width: 50px;
          }

          .author {
            padding-left: 15px;
            font-size: 15px;
            padding-bottom: 3px;
          }

          .date {
            padding-left: 15px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.44);
          }
        `}</style>
      </ColumnWrapper>
    );
  }

  // For post titles
  if (level === 1) {
    return (
      <ColumnWrapper>
        <h1>{children}</h1>
        <style jsx>{`
          h1 {
            font-family: "Lato", sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
        `}</style>
      </ColumnWrapper>
    );
  }

  if (level === 2) {
    return (
      <ColumnWrapper>
        <h3>{children}</h3>
        <style jsx>{`
          h3 {
            font-family: "Merriweather", serif;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
        `}</style>
      </ColumnWrapper>
    );
  }

  if (level === 3) {
    return (
      <ColumnWrapper>
        <h4>{children}</h4>
        <style jsx>{`
          h4 {
            font-family: "Merriweather", serif;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
        `}</style>
      </ColumnWrapper>
    );
  }

  return <div />;
};

export default Heading;
