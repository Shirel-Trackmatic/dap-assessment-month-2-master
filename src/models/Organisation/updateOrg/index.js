const {
  mysql: { getFullDbSchema, updateRow },
} = require("../../../utils");
const schema = require("./schema");

const updateOrg = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await updateRow(dbConn.models.Organisation, value);
  return response;
};

module.exports = updateOrg;
