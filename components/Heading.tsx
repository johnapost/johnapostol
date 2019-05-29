import { ReactElement } from "react";

interface IProps {
  children: ReactElement[];
  level: number;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default ({ children, level }: IProps) => {
  const [firstChild] = children;

  // For post date
  if (
    level === 1 &&
    firstChild &&
    firstChild.props.value.startsWith("Date: ")
  ) {
    const fullDate = firstChild.props.value.split("Date: ")[1];
    const [year, month, date] = fullDate.split("-");
    const formattedDate = `${months[Number(month) - 1]} ${date}, ${year}`;
    return (
      <>
        <div className="container">
          <img src="../static/me.jpg" />
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
      </>
    );
  }

  // For post titles
  if (level === 1) {
    return (
      <>
        <h1>{children}</h1>
        <style jsx>{`
          h1 {
            font-family: "Merriweather", sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
        `}</style>
      </>
    );
  }

  if (level === 2) {
    return (
      <>
        <h3>{children}</h3>
        <style jsx>{`
          h3 {
            font-family: "Lato", sans-serif;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
        `}</style>
      </>
    );
  }

  if (level === 3) {
    return (
      <>
        <h4>{children}</h4>
        <style jsx>{`
          h4 {
            font-family: "Lato", sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
        `}</style>
      </>
    );
  }

  return <div />;
};