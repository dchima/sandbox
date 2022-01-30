import UrlController from '../controllers/urlController';
import urlController from '../controllers/urlController';

const {
  addUrl,
  getUrl
} = UrlController;

const resolvers = {

  Query: {
    getUrl,
  },
  
  Mutation: {
    addUrl,
  },
};
module.exports = resolvers;
