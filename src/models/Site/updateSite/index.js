const {
  mysql: { getFullDbSchema, updateRow },
} = require("../../../utils");
const schema = require("./schema");

const updateSite = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await updateRow(dbConn.models.Site, value);
  return response;
};

module.exports = updateSite;
