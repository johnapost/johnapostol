import React from "react";

interface Props {
  children: JSX.Element[] | string;
  ordered: boolean;
}

const ListItem = ({ children }: Props): JSX.Element => (
  <>
    <li>{children}</li>
    <style jsx>{`
      li {
        font-family: Times, serif;
        font-size: 1.1rem;
        line-height: 3rem;
        margin-left: 2rem;
      }
    `}</style>
  </>
);

export default ListItem;
