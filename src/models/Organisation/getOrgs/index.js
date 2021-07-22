const {
  mysql: { getFullDbSchema, getQuery, getRowsWithQuery },
} = require("../../../utils");

const getOrgs = async (query = {}) => {
  const dbConn = await getFullDbSchema();
  const where = getQuery(query);
  const response = await getRowsWithQuery(dbConn.models.Organisation, where);
  return response;
};

module.exports = getOrgs;
