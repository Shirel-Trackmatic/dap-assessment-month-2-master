const {
  Op: { like },
} = require("sequelize");
const { mergeAll } = require("ramda");

const getQuery = (query = {}) => ({
  ...mergeAll(
    Object.keys(query).map((key) => ({
      [key]: {
        [like]: `%${query[key]}%`,
      },
    }))
  ),
});

module.exports = getQuery;
