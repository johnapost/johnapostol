import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  const [hasStuck, setStuck] = useState(false);
  const [count, setCount] = useState(0);

  // Consider that the nav has stuck if inView transitioned more than twice
  useEffect(() => {
    // Threshold at 2 because initial load has a transition
    if (count > 2) setStuck(true);
  }, [count]);

  // Count the number of times inView has fired
  useEffect(() => setCount(count + 1), [inView]);

  return (
    <ColumnWrapper>
      <h1 ref={ref}>{title}</h1>
      <div
        className={`
          spacer
          ${inView ? "static" : "sticky"}
          ${hasStuck ? "has-stuck" : "initial"}
        `}
      >
        <div className="background" />
        <div className="navigation">
          <img src={require("../public/static/me.jpg?size=320")} />
          <div className="post-details">
            <div className="top">John Apostol</div>
            <div className="bottom">{formattedDate}</div>
          </div>
          <div className="post-nav">
            <div className="top">{title}</div>
            <Link href="/">
              <a className="bottom" data-cy="home">
                Home
              </a>
            </Link>
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
          margin: 82px 0 0;
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
          height: 50px;
          overflow-y: visible;
          position: relative;
          width: 100%;
        }

        .post-nav,
        .post-details {
          transition: 1s;
          position: absolute;
          left: 65px;
        }

        .static .post-nav {
          pointer-events: none;
        }

        .static.initial .post-details {
          animation: 1s slidein reverse paused;
        }

        .static.initial .post-nav {
          animation: 1s slideout reverse paused;
        }

        .static.has-stuck .post-details {
          animation: 1s slidein forwards;
        }

        .static.has-stuck .post-nav {
          animation: 1s slideout forwards;
        }

        .sticky .post-details {
          pointer-events: none;
          animation: 1s slideout forwards;
        }

        .sticky .post-nav {
          animation: 1s slidein forwards;
        }

        .sticky > div {
          position: fixed;
          top: 0;
        }

        .sticky .background {
          height: 82px;
        }

        .sticky .navigation {
          height: 82px;
        }

        .sticky .background {
          left: 0;
          width: 100%;
        }

        .sticky .border {
          display: flex;
          left: 0;
          top: 82px;
          width: 100%;
          pointer-events: none;
        }

        img {
          border-radius: 100%;
          display: inline-block;
          height: 50px;
          width: 50px;
          z-index: 5;
        }

        .top {
          font-size: 15px;
          min-width: 200px;
          max-width: calc(100vw - 95px);
          overflow: hidden;
          padding-bottom: 3px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .bottom {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.44);
          width: 200px;
        }

        h1 {
          font-family: "Lato", sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        @keyframes slideout {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes slidein {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
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
