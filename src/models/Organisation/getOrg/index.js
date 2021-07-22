const {
  mysql: { getFullDbSchema, getRow },
} = require("../../../utils");
const schema = require("./schema");

const getOrg = async (id) => {
  const { value } = await schema.validate(id);
  const dbConn = await getFullDbSchema();
  const response = await getRow(dbConn.models.Organisation, value);
  return response;
};

module.exports = getOrg;
