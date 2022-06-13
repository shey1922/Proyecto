const mapArrayToFilterExpression = (array) => {
  attributeValues = {};
  array.forEach((element, index) => {
    attributeValues[`:val${index}`] = element;
  });
  return attributeValues;
};

const mapArrayToBatchParams = (array, tableName) => {
  const params = {
    RequestItems: {},
  };
  params.RequestItems[tableName] = array.map((element) => {
    return { PutRequest: { Item: element } };
  });
  return params;
};

const mapArrayToPutRequest = (array) => {
  return array.map(({ ...element }) => ({
    PutRequest: { Item: { ...element } },
  }));
};

module.exports = {
  mapArrayToFilterExpression,
  mapArrayToBatchParams,
  mapArrayToPutRequest,
};
