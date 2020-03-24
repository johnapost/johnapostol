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
  "December",
];

export default (fullDate: string): string => {
  const [year, month, date] = fullDate.split("-");
  return `${months[Number(month) - 1]} ${date}, ${year}`;
};
