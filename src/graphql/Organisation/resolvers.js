const { Organisation, Group, Site } = require("../../models");

module.exports = {
  Query: {
    getOrg: (_, { id }) => Organisation.getOrg(id),
    getOrgs: (_, { query }) => Organisation.getOrgs(query),
  },
  Mutation: {
    createOrg: (_, { input }) => Organisation.createOrg(input),
    updateOrg: (_, { input }) => Organisation.updateOrg(input),
  },
  Org: {
    Groups: (org) => Group.getGroup(org.groupId),
    Sites: (org, { query }) => Site.getOrgWithSites(org.id, query),
  },
};
