import React from "react";
import ColumnWrapper from "../components/ColumnWrapper";
import formatDate from "../utils/formatDate";
import { useInView } from "react-intersection-observer";
import { atLeastSmall } from "../utils/breakpoints";
import FadedRule from "./FadedRule";

interface Props {
  date: string;
  title: string;
}

const PostHeading = ({ date, title }: Props): JSX.Element => {
  const formattedDate = formatDate(date);
  const [ref, inView] = useInView({ threshold: 0.01 });

  return (
    <ColumnWrapper>
      <h1 ref={ref}>{title}</h1>
      <div className={`spacer ${inView ? "static" : "sticky"}`}>
        <div className="background" />
        <div className="navigation">
          <img src={require("../public/static/me.jpg")} />
          <div>
            <div className="author">John Apostol</div>
            <div className="date">{formattedDate}</div>
          </div>
        </div>
        <div className="border">
          <FadedRule />
        </div>
      </div>
      <style jsx>{`
        .spacer {
          font-family: "Merriweather", serif;
          line-height: 20px;
        }

        .static {
          margin: 1rem 0;
        }

        .sticky {
          margin: 95px 0 0;
        }

        .background {
          background: #ffffff;
          height: 0;
        }

        .border {
          display: none;
        }

        .navigation {
          align-items: center;
          display: flex;
          height: 0;
          padding: 25px 0;
          overflow-y: visible;
        }

        .sticky > div {
          height: 50px;
          padding: calc(1rem + 25px) 0;
          position: fixed;
          top: 0;
        }

        .sticky .background {
          left: 0;
          width: 100%;
        }

        .sticky .border {
          display: flex;
          left: 0;
          top: calc(1rem + 25px);
          width: 100%;
          pointer-events: none;
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
          font-size: 2.2rem;
          font-weight: 700;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        @media ${atLeastSmall} {
          .sticky {
            margin: 80px 0 0;
          }
        }
      `}</style>
    </ColumnWrapper>
  );
};

export default PostHeading;
