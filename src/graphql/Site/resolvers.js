const { Site, Organisation } = require("../../models");

module.exports = {
  Query: {
    getSite: (_, { id }) => Site.getSite(id),
    getSites: () => Site.getSites(),
  },
  Mutation: {
    createSite: (_, { input }) => Site.createSite(input),
    updateSite: (_, { input }) => Site.updateSite(input),
  },
  Site: {
    Org: (site) => Organisation.getOrg(site.orgId),
  },
};
