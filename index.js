const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');


const typeDefs = require('./GraphQL/typeDefs.js');
const resolvers = require('./GraphQL/resolvers');
const { MONGODB } = require('./config.js');


//we just take the req in object and forward to our context

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req})=>({req})
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

