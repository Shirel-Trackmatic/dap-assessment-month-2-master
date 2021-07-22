const {
  mysql: { getFullDbSchema, getQuery, getRowsWithQuery },
} = require("../../../utils");

const getOrgWithSites = async (orgId, query = {}) => {
  const dbConn = await getFullDbSchema();
  const where = { orgId, ...getQuery(query) };
  const response = await getRowsWithQuery(dbConn.models.Site, where);
  return response;
};

module.exports = getOrgWithSites;
