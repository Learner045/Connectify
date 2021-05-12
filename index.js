const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');


const typeDefs = require('./GraphQL/typeDefs.js');
const resolvers = require('./GraphQL/resolvers');
const { MONGODB } = require('./config.js');



const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch(err => {
    console.error(err)
  });

