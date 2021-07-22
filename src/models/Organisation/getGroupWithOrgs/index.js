const {
  mysql: { getFullDbSchema, getQuery, getRowsWithQuery },
} = require("../../../utils");

const getGroupWithOrgs = async (groupId, query = {}) => {
  const dbConn = await getFullDbSchema();
  const where = { groupId, ...getQuery(query) };
  const response = await getRowsWithQuery(dbConn.models.Organisation, where);
  return response;
};

module.exports = getGroupWithOrgs;
