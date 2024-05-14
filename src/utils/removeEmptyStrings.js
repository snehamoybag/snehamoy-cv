const removeEmptyStrings = (stringArr) => {
  return stringArr.filter((string) => Boolean(string));
};

export default removeEmptyStrings;
