const mapArrayToFilterExpression = (array) => {
    attributeValues = {};
    array.forEach((element, index) => {
        attributeValues[`:val${index}`] = element
    });
    return attributeValues;
}

module.exports = {
    mapArrayToFilterExpression
}