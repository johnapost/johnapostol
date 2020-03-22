import React from "react";

interface Props {
  children: JSX.Element[] | string;
}

const ListItem = ({ children }: Props): JSX.Element => (
  <>
    <li>{children}</li>
    <style jsx>{`
      li {
        font-size: 1.1rem;
        line-height: 3rem;
        margin-left: 2rem;
        list-style-type: disc;
      }
    `}</style>
  </>
);

export default ListItem;
