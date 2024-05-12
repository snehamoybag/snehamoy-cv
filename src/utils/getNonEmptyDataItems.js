const getNonEmptyDataItems = (data) =>
  data.filter((dataItem) => {
    return Object.values(dataItem).some((value) => Boolean(value) === true);
  });

export default getNonEmptyDataItems;
