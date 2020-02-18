import React from "react";
import ColumnWrapper from "../components/ColumnWrapper";
import formatDate from "../utils/formatDate";

interface Props {
  date: string;
  title: string;
}

const PostHeading = ({ date, title }: Props): JSX.Element => {
  const formattedDate = formatDate(date);

  return (
    <ColumnWrapper>
      <h1>{title}</h1>
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

        h1 {
          font-family: "Lato", sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
      `}</style>
    </ColumnWrapper>
  );
};

export default PostHeading;
