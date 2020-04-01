// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (filePath) => {
  const file = filePath.split("content/")[1];
  return file.split(".json")[0];
};
