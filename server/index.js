const { ApolloServer } = require("apollo-server-express")
const { typeDefs } = require("./schema/typeDefs")
const { resolvers } = require("./schema/resolvers")

const express = require("express")
const app = express()

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({port : 3001}, () => {
    console.log("server start")
})