import { atLeastSmall, atLeastMedium } from "./breakpoints";

describe("breakpoints", () => {
  it("atLeastSmall is a valid min-width media query at 740px", () => {
    expect(atLeastSmall).toBe("(min-width: 740px)");
  });

  it("atLeastMedium is a valid min-width media query at 900px", () => {
    expect(atLeastMedium).toBe("(min-width: 900px)");
  });
});
