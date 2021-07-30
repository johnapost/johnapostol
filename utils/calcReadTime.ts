const calcReadTime = (postBody: string): number => {
  // Remove new lines, count words, and get count of words
  const words = postBody.replace(/\n/gm, "").trim().split(/\s+/).length;

  // Divide by 265 and round up for readTime in minutes
  return Math.ceil(words / 265);
};

export default calcReadTime;
