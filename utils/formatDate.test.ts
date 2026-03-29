import formatDate from "./formatDate";

describe("formatDate", () => {
  it("formats a standard date correctly", () => {
    expect(formatDate("2024-03-15")).toBe("March 15, 2024");
  });

  it("strips leading zeros from day", () => {
    expect(formatDate("2024-01-05")).toBe("January 5, 2024");
  });

  it("handles December (last month in array)", () => {
    expect(formatDate("2023-12-31")).toBe("December 31, 2023");
  });

  it("handles January (first month in array)", () => {
    expect(formatDate("2022-01-01")).toBe("January 1, 2022");
  });

  it("returns correct month name for each month", () => {
    const expected = [
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
    expected.forEach((month, i) => {
      const monthNum = String(i + 1).padStart(2, "0");
      expect(formatDate(`2024-${monthNum}-01`)).toBe(`${month} 1, 2024`);
    });
  });
});
