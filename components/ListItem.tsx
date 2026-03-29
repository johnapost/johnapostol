import React from "react";

interface Props {
  children: React.ReactNode;
  ordered?: boolean;
}

const ListItem = ({ children, ordered = false }: Props): React.JSX.Element => (
  <>
    <li>{children}</li>
    <style jsx>{`
      li {
        ${ordered ? "font-family: Times, serif;" : "list-style-type: disc;"}
        font-size: 1.1rem;
        line-height: 3rem;
        margin-left: 2rem;
      }
    `}</style>
  </>
);

export default ListItem;
