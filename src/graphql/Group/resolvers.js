const { Group, Organisation } = require("../../models");

module.exports = {
  Query: {
    getGroup: (_, { id }) => Group.getGroup(id),
    getGroups: (_, { query }) => Group.getGroups(query),
  },
  Mutation: {
    createGroup: (_, { input }) => Group.createGroup(input),
    updateGroup: (_, { input }) => Group.updateGroup(input),
  },
  Group: {
    Orgs: (grp, { query }) => Organisation.getGroupWithOrgs(grp.id, query),
  },
};
