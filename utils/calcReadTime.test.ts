import calcReadTime from "./calcReadTime";

describe("calcReadTime", () => {
  it("returns 1 for a short passage below 265 words", () => {
    const text = "word ".repeat(100);
    expect(calcReadTime(text)).toBe(1);
  });

  it("returns 1 for exactly 265 words", () => {
    const text = "word ".repeat(265);
    expect(calcReadTime(text)).toBe(1);
  });

  it("returns 2 for 266 words", () => {
    const text = "word ".repeat(266);
    expect(calcReadTime(text)).toBe(2);
  });

  it("rounds up fractional minutes", () => {
    // 530 words = exactly 2 min; 531 words = ceil(2.003) = 3 min
    const text = "word ".repeat(531);
    expect(calcReadTime(text)).toBe(3);
  });

  it("strips newlines before counting words", () => {
    const textWithNewlines = "word\nword\nword ".repeat(88); // 264 words across newlines
    expect(calcReadTime(textWithNewlines)).toBe(1);
  });

  it("returns 1 for a single word", () => {
    expect(calcReadTime("hello")).toBe(1);
  });
});
