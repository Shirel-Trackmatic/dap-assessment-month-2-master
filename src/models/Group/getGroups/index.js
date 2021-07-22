const {
  mysql: { getFullDbSchema, getQuery, getRowsWithQuery },
} = require("../../../utils");

const getGroups = async (query = {}) => {
  const dbConn = await getFullDbSchema();
  const where = getQuery(query);
  const response = await getRowsWithQuery(dbConn.models.Group, where);
  return response;
};

module.exports = getGroups;
