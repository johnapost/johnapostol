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
        <div>{formattedDate}</div>
        <style jsx>{`
          div {
            color: rgba(0, 0, 0, 0.44);
            font-size: 0.9rem;
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
