import React from "react";
import GitHub from "./GitHub";
import { atLeastSmall } from "../utils/breakpoints";

interface Props {
  href: string;
  preview: string;
}

const RepoCard = ({ href, preview }: Props): JSX.Element => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    <div className="card">
      <div className="description">
        <div className="inline">
          <div>
            <GitHub />
          </div>
          <strong>{href.slice(href.indexOf("johnapost"))}</strong>
        </div>
        <div className="preview">{preview}</div>
      </div>
      <img src={require("../public/static/me.jpg?size=320")} />
    </div>
    <style jsx>{`
      a {
        text-decoration: none;
        color: #000000;
      }

      .card {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px,
          rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
        display: flex;
        flex: 0 0 auto;
        margin: 0 1rem;
      }

      img {
        display: none;
      }

      .description {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        justify-content: center;
        padding: 1rem 20px;
      }

      .inline {
        display: flex;
        justify-content: center;
      }

      .inline div {
        margin-right: 0.5rem;
      }

      .preview {
        font-size: 0.9rem;
        text-align: center;
      }

      @media ${atLeastSmall} {
        inline,
        preview {
          max-height: 40px;
          overflow: hidden;
        }

        .inline {
          justify-content: flex-start;
        }

        .preview {
          text-align: start;
        }

        img {
          display: block;
          height: 125px;
          width: 125px;
        }
      }
    `}</style>
  </a>
);

export default RepoCard;
