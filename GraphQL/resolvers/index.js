const postsResolvers = require('./posts');
const usersResolvers = require('./users');

//resolvers are required to process each query type
module.exports = {
    Query:{
        ...postsResolvers.Query
    },
    Mutation:{
        ...usersResolvers.Mutation
    }
    
};